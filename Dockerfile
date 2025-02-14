FROM node:22
RUN npm install -g http-server
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
# RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8000
# VOLUME /var/lib/api
# VOLUME /etc/api
CMD ["http-server", "dist"]
# CMD ["fastapi", "run"]

