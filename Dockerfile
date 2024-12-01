FROM node:20-alpine
WORKDIR '/app'
COPY public/ ./public
COPY src/ ./src
COPY package.json .
RUN npm install
COPY . .
EXPOSE 3000
ADD start.sh /
RUN chmod +x /start.sh
CMD ["/start.sh"]