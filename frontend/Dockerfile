FROM node:18-alpine
RUN npm install -g nodemon

WORKDIR /app

COPY package.json .

RUN npm install

RUN npm ci

RUN npm start

COPY . .

EXPOSE 3000

# Use script specified in package,json
CMD ["npm", "start"]