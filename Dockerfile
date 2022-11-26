FROM node:16.17.0

WORKDIR /app

COPY ./package.json ./
COPY ./yarn.lock ./

RUN yarn install

COPY ./src/ ./src/

EXPOSE 8080

CMD ["yarn", "start"]
