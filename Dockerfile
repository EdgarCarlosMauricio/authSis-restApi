FROM python:3.8.3-alpine3.12
COPY . /nodejs-sequelize-restApi
WORKDIR /nodejs-sequelize-restApi
COPY ["package.json", "package-lock.json*", "./"]
RUN npm install --production
COPY . .
EXPOSE 5001
CMD ["node", "src/index.py"]