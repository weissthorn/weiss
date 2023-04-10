# Base on offical Node.js Alpine image
FROM rethinkdb:latest

RUN useradd -ms /bin/bash weiss

# Set working directory
WORKDIR /usr/app
RUN mkdir /usr/local/nvm
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 18.15.0
RUN curl https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

# Install PM2 globally
RUN npm i -g pm2 yarn nodemon

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

# Run npm start script with PM2 when container starts
CMD [ "pm2-runtime", "yarn", "--", "start" ]