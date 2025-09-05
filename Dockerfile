FROM docker.io/node:lts AS build
WORKDIR /app
COPY package.json package-lock.json .
RUN npm i
COPY . .
RUN npm run build

FROM docker.io/nginx:stable-alpine3.21-perl AS runtime
COPY --from=build /app/dist /usr/share/nginx/html/
EXPOSE 80