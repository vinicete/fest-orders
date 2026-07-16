FROM node:22-alpine

WORKDIR /usr/src/app

# Copia os arquivos de dependência primeiro (para usar o cache do Docker)
COPY package*.json ./

# Instala as dependências (e o Angular CLI globalmente para facilitar)
RUN npm install -g @angular/cli
RUN npm install

# Copia o resto do código
COPY . .

# A porta padrão do Angular
EXPOSE 4200

# O comando para rodar fica no docker-compose.yml
CMD ["npm", "start"]
