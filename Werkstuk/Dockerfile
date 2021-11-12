FROM node:16.11.3
WORKDIR /code
ENV PORT 80
COPY package.json /api/package.json
RUN npm install
COPY . /code
CMD ["node", "src/erver.js"]