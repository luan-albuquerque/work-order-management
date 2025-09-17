# Etapa 1: Build
FROM node:22.19-alpine AS builder

WORKDIR /app

# Copia o package.json e o package-lock.json da raiz (contexto pai)
COPY ../../package*.json ./
COPY ../../nest-cli.json ./
COPY ../../tsconfig*.json ./

# Instala as dependências
RUN npm install

# Copia o código fonte
COPY ../../apps/ ./apps/
COPY ../../libs/ ./libs/

# Executa o build da aplicação (NestJS)
RUN npm run build clients-service

# Verifica o conteúdo da pasta dist
RUN ls -lha /app/dist/apps/clients-service

# Etapa 2: Runtime
FROM node:22.19-alpine

WORKDIR /app

# Copia os artefatos da build para o container
COPY --from=builder /app/dist/apps/clients-service ./dist

# Copia o package.json da raiz
COPY ../../package*.json ./

# Instala as dependências de produção
RUN npm install --omit=dev

# Copia o arquivo .env se existir
# COPY .env.dev ./

# Verifica o conteúdo da pasta dist
RUN ls -lha /app/dist

# Expõe a porta padrão do NestJS
EXPOSE 3000

# Comando para rodar o microserviço
CMD ["node", "dist/main.js"]
