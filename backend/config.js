require('dotenv').config();
module.exports = {
  port: process.env.PORT,
  dbuser: process.env.POSTGRES_USER,
  dbpass: process.env.POSTGRES_PASSWORD,
  db: process.env.POSTGRES_DB,
  dbhost: process.env.PGHOST,
  dbport: process.env.PGPORT,
  connectionstring: process.env.DB_STRING,

  "development": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.PGHOST,
    "port": process.env.PGPORT,
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": process.env.POSTGRES_USER,
    "password": process.env.POSTGRES_PASSWORD,
    "database": process.env.POSTGRES_DB,
    "host": process.env.PGHOST,
    "port": process.env.PGPORT,
    "dialect": "postgres"
  }
};