# Mesa — imagen mínima para el hito 2 (servidor en la nube).
FROM node:20-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm ci --omit=dev
COPY engine.js server.js ./
COPY public ./public
EXPOSE 3000
CMD ["node", "server.js"]
