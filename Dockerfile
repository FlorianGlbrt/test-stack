FROM node:23.6.0-alpine
WORKDIR /app

COPY package*.json ./
RUN npm install
RUN npm install -g serve

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npx", "serve", "-s", "build", "-l", "3000"]