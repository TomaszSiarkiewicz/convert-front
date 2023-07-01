FROM node:16-alpine
WORKDIR /app
# Copy app files
COPY . .
ENV PORT=3030
RUN npm ci
RUN npm run build
ENV NODE_ENV production
EXPOSE 3030
CMD [ "npx", "serve", "build" ]