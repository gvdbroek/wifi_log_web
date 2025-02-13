FROM node:22
WORKDIR /app
COPY . .
RUN npm install
# RUN pip install --no-cache-dir -r requirements.txt
EXPOSE 8000
# VOLUME /var/lib/api
# VOLUME /etc/api
CMD ["npm start"]
# CMD ["fastapi", "run"]

