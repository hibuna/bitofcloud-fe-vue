FROM node:21.7.1-alpine

COPY . /app
WORKDIR /app

RUN npm install -g pnpm
RUN pnpm install