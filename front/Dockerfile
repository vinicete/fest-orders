# Estágio 1: Build (Compila o código TypeScript para arquivos estáticos)
FROM node:22-alpine AS build
WORKDIR /usr/src/app

# Copia os arquivos de dependência primeiro (para usar o cache do Docker)
COPY package*.json ./
RUN npm install

# Copia o resto do código
COPY . .

# Faz a compilação pesada
RUN npm run build --configuration=production

# Estágio 2: Produção (Servidor web Nginx super leve)
FROM nginx:alpine
# Copia APENAS os arquivos finais prontos para o Nginx (sem código fonte e sem node_modules)
COPY --from=build /usr/src/app/dist/front/browser /usr/share/nginx/html

# A porta padrão do Nginx é 80
EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
