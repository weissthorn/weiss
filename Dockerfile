# Use rethinkdb image as base image
FROM rethinkdb:latest

# Set working directory
WORKDIR /usr/app

# Create a new user and group
RUN addgroup --system --gid 1001 weiss
RUN adduser --system --uid 1001 weiss

RUN mkdir /usr/local/nvm
ENV NVM_DIR=/usr/local/nvm
ENV NODE_VERSION=18.17.0
ENV NODE_ENV=production

RUN curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH=$NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH=$NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install PM2 globally
RUN npm i -g pm2 yarn nodemon

# Make .env file and preload it with the environment variables
SHELL ["/bin/bash", "-c"]
COPY ./next-env.sh ./
RUN bash next-env.sh

# Copy package.json and package-lock.json before other files
# Utilise Docker cache to save re-installing dependencies if unchanged
COPY ./package.json ./
COPY ./yarn.lock ./


# Install dependencies
RUN yarn

# Copy all files
COPY ./ ./

# Build app
RUN yarn build

# Expose the listening port
EXPOSE 2323

# Run container as non-root (unprivileged) user
# The node user is provided in the Node.js Alpine base image
USER weiss


# Run the app
CMD [ "node", "client.js" ]
