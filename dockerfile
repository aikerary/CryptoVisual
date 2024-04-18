# Utiliza la imagen base de Node.js
FROM node:18-alpine

# Establece el directorio de trabajo dentro del contenedor
WORKDIR /app

# Copia los archivos de package.json y package-lock.json (si existe)
COPY package*.json ./

# Instala las dependencias
RUN npm install --production

# Copia el resto de los archivos de la aplicación
COPY . .

# Construye la aplicación para producción
RUN npm run build

# Utiliza una imagen más ligera para servir la aplicación construida
FROM nginx:stable-alpine

# Copia la aplicación construida desde la imagen de Node.js anterior
COPY --from=0 /app/dist /usr/share/nginx/html

# Expone el puerto 80 para que Nginx pueda servir la aplicación
EXPOSE 80

# Inicia Nginx cuando el contenedor se ejecute
CMD ["nginx", "-g", "daemon off;"]