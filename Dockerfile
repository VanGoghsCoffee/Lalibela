FROM node:12.18-alpine AS test
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install
COPY . .
RUN npm test

FROM node:12.18-alpine
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY --from=test /usr/src/app .
RUN mv node_modules ../
EXPOSE 3000
CMD ["npm", "start"]