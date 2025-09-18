# ======================
# Etapa 1: Build
# ======================
FROM node:22.19-alpine AS builder

WORKDIR /app

# Copia package.json da raiz
COPY ../../package*.json ./
COPY ../../nest-cli.json ./
COPY ../../tsconfig*.json ./

# Instala todas as dependências
RUN npm install

# Copia apenas o microservice auth-service e as libs
COPY ../../apps/auth-service ./apps/auth-service
COPY ../../libs ./libs

# Faz o build apenas do auth-service
RUN npm run build auth-service

# ======================
# Etapa 2: Runtime
# ======================
FROM node:22.19-alpine

WORKDIR /app

# Copia só o build do auth-service
COPY --from=builder /app/dist/apps/auth-service ./dist

# Copia package.json da raiz (para deps em runtime)
COPY ../../package*.json ./

# Instala somente dependências de produção
RUN npm install --omit=dev

# Expõe a porta
EXPOSE 3000

# Comando para rodar o microserviço
CMD ["node", "dist/main.js"]
