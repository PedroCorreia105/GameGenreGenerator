FROM node:18.16.0-alpine as builder

WORKDIR /app

COPY package*.json ./
RUN npm i --legacy-peer-deps
COPY . .
RUN npm run build


FROM node:18.16.0-alpine

WORKDIR /app

COPY --from=builder /app/package.json ./package.json
COPY --from=builder /app/build ./build
RUN npm install --omit=dev --legacy-peer-deps
RUN apk --no-cache add curl

EXPOSE 8080
ENV PORT=8080

CMD ["node", "build/index.js"]