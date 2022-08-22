FROM rethinkdb:2.4.2 as deps
EXPOSE 8080

FROM lts-alpine3.15
ENV PORT 2323

# Create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# Installing dependencies
COPY package.json /usr/src/app/
COPY yarn.lock /usr/src/app/
RUN yarn install
# Copying source files
COPY . /usr/src/app

# Building app
RUN yarn build
EXPOSE 2323

# Running the app
CMD ["yarn","start"]


