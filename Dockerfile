# Production multi-stage build
FROM node:16-alpine AS builder
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH

# package*.json ile bağımlılıkları yükle (package-lock varsa da kopyalanır)
COPY package*.json ./
RUN npm install --no-audit --no-fund --silent --legacy-peer-deps

# Uygulama kaynaklarını kopyala ve build et
COPY . .
RUN npm run build

# Nginx ile statik dosyaları sun
FROM nginx:stable-alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]