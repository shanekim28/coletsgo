const { dbuser, dbpass, db, dbhost, dbport } = require('../config');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(`postgres://${dbuser}:${dbpass}@${dbhost}:${dbport}/${db}?ssl=true`, {
  logging: console.log,
});

const modelDefiners = [
  require("../app/models/user_model.js"),
]

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

module.exports = sequelize;