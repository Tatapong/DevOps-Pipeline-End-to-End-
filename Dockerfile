FROM node:alpine AS build
WORKDIR /app
COPY skymeta/ .
RUN npm install
RUN npm run build
FROM node:alpine
WORKDIR /app
COPY --from=build /app ./
EXPOSE 3000
CMD ["npm", "start"]