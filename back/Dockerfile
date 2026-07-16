# Estágio 1: Builder — compila TypeScript para JavaScript
FROM node:22-alpine AS build
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

# Estágio 2: Produção — imagem limpa só com o necessário
FROM node:22-alpine
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install --omit=dev
COPY --from=build /usr/src/app/dist ./dist
EXPOSE 3002
CMD ["node", "dist/main.js"]
