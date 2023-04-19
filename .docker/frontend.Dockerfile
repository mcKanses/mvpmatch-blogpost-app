FROM node:18-slim

WORKDIR /app

COPY frontend/package.json .

RUN npm i

COPY frontend/. .

CMD npm start