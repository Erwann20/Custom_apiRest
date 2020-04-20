FROM node:latest
WORKDIR /app
COPY . .
RUN npm install json-server --save-dev

EXPOSE 8080
CMD [ "node", "server.js" ,"-p", "8080",]