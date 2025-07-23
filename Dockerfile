# Dockerfile for kingsley_ogueri_ui_garden
FROM node:20-alpine as build
WORKDIR /kingsley_ogueri_ui_garden_build_checks
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:alpine
WORKDIR /kingsley_ogueri_ui_garden_build_checks
COPY --from=build /kingsley_ogueri_ui_garden_build_checks/build /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 8018
CMD ["nginx", "-g", "daemon off;"]
