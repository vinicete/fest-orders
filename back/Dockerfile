FROM node:22-alpine

WORKDIR /usr/src/app

# Copia os arquivos de dependência primeiro (para usar o cache do Docker)
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o resto do código
COPY . .

# A porta que o app usa
EXPOSE 3003

# O comando para rodar fica no docker-compose.yml, mas deixamos um padrão aqui
CMD ["npm", "run", "start:dev"]
