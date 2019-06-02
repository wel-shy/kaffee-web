FROM node:alpine as builder
RUN mkdir /app
WORKDIR /app

COPY ./ /app
RUN rm -rf ./node_modules
RUN yarn install
RUN yarn build

FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
COPY ./default.conf /etc/nginx/conf.d/defualt.conf

EXPOSE 8002