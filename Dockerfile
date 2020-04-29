FROM stefanscherer/node-windows AS builder
WORKDIR /app
COPY . .
RUN npm install react-scripts -g --silent
RUN npm install node-sass
RUN yarn install
RUN yarn run build

FROM stefanscherer/node-windows
RUN yarn global add serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "3500", "-s", "."]doc