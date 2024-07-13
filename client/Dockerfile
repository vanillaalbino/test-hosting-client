# Используем официальный образ Node.js LTS в качестве базового образа для сборки
FROM node:14-alpine as build

# Устанавливаем рабочую директорию внутри контейнера
WORKDIR /app/client

# Копируем package.json и package-lock.json для установки зависимостей
COPY package*.json ./

# Устанавливаем зависимости
RUN npm install --production

# Копируем остальные файлы приложения в контейнер
COPY . .

# Собираем React приложение для production build
RUN npm run build

# Второй этап - создаем легковесный контейнер только для статических файлов
FROM nginx:alpine

# Копируем собранные файлы React приложения из предыдущего этапа
COPY --from=build /app/client/build /usr/share/nginx/html

# Указываем Docker, что наше приложение слушает порт 80
EXPOSE 80

# Команда для запуска nginx сервера
CMD ["nginx", "-g", "daemon off;"]
