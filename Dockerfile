FROM node:16

WORKDIR /usr/src/app

COPY package.json ./
# COPY yarn.lock ./
# removed yarn.lock to prevent vulnerabilies (in short, just for auto updates)

RUN npm install -g serve
RUN npm install

COPY . .

RUN npm run build


CMD [ "serve", "-s", "build" ]
