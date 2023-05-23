const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  dbuser: process.env.POSTGRES_USER,
  dbpass: process.env.POSTGRES_PASSWORD,
  db: process.env.POSTGRES_DB,
  dbhost: process.env.PGHOST,
  dbport: process.env.PGPORT
};