FROM node:20.17.0

RUN mkdir -p /app

WORKDIR /app

COPY package*.json ./

RUN npm install --frozen-lockfile

COPY  . .

RUN ls -la

EXPOSE 8080

CMD ["npm", "run", "start:prod"]