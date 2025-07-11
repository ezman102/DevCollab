FROM node:20.17.0 as builder

RUN mkdir -p /app

WORKDIR /app

COPY . .

RUN npm install

RUN npm run build-only

FROM node:20.17.0

RUN mkdir -p /app

WORKDIR /app

COPY --from=builder /app/dist ./dist

COPY package*.json ./

RUN npm install --frozen-lockfile

RUN npm install -g serve

COPY  . .

RUN ls -la

EXPOSE 3000

CMD ["serve", "-s", "dist"]