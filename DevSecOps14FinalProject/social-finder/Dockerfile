FROM node:14

WORKDIR /app

COPY package*.json ./

RUN npm install
RUN npm install react-scripts

COPY . ./
RUN npm run build
RUN npm install -g serve


EXPOSE 3000

CMD ["serve", "-s", "build"]
