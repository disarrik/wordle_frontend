FROM node AS builder
WORKDIR /app
COPY . .
RUN npm install && npm rebuild node-sass && npm run build

FROM nginx:alpine
EXPOSE 80
WORKDIR /usr/share/nginx/html
RUN rm -rf ./*
COPY --from=builder /app/dist .