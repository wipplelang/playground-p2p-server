FROM caddy:alpine

RUN apk add --update nodejs npm
RUN npm install -g pm2

COPY . .
RUN npm install

CMD ["pm2-runtime", "."]
