FROM node:18-slim

WORKDIR /mvp-blogpost-app

COPY backend/package.json .

RUN npm install

COPY backend/. .

CMD [ "tail", "-F", "anything" ]