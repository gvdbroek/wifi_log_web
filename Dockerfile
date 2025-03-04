FROM node:22 AS builder
# RUN npm install -g http-server
WORKDIR /usr/src/app

# allows us to call binaries like.. i dunno, vite I suppose
ENV PATH=/usr/src/node_modules/.bin:$PATH

ARG API_URL
ARG API_KEY
ARG BASE_URL

ENV VITE_API_URL=$API_URL
ENV VITE_API_KEY=$API_KEY
ENV VITE_BASE_URL=$BASE_URL

COPY package*.json ./

RUN npm install

COPY . ./
RUN npm run build

FROM builder AS dev
EXPOSE 5173

# extra '--' is to tell npm that htese are args for dev
# --host 0.0.0.0 is needed to expose to net traffic in container
CMD ["npm" , "run", "--" , "dev", "--host", "0.0.0.0"]

FROM builder AS prod-builder

RUN npm run build

FROM nginx:latest AS prod

COPY --from=prod-builder /usr/src/app/dist /usr/share/nginx/html

EXPOSE 8000

CMD ["nginx", "-g", "daemon off;"]

