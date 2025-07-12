# Etapa 1: Construcción del proyecto Angular
FROM node:20-alpine as build

WORKDIR /app

# Copia package.json y package-lock.json
COPY package*.json ./

# Instala dependencias
RUN npm install

# Copia el resto del código fuente
COPY . .

# Compila la aplicación en modo producción
RUN npm run build -- --configuration=production

# Etapa 2: Servir con Nginx
FROM nginx:alpine

# Copia los archivos compilados al directorio de Nginx
COPY --from=build /app/dist/alys_gym/browser /usr/share/nginx/html

# Elimina configuración por defecto y agrega la tuya si quieres
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
