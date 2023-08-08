FROM caddy:alpine

RUN apk add --update nodejs npm
RUN npm install -g pm2

COPY . .
RUN npm install

CMD ["/bin/sh", "-c", "pm2-runtime . & caddy run --config /etc/caddy/Caddyfile --adapter caddyfile"]
