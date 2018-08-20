FROM node:carbon

WORKDIR /server
ADD . .
RUN npm install
RUN npm run build

EXPOSE 3000
CMD ["node", "dist/src/index.js"]