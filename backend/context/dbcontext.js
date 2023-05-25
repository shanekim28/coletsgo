const { dbuser, dbpass, db, dbhost, dbport, connectionstring } = require('../config');
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(connectionstring || `postgres://${dbuser}:${dbpass}@${dbhost}:${dbport}/${db}`, {
  logging: console.log,
});

const modelDefiners = [
  require("../app/models/user_model.js"),
]

for (const modelDefiner of modelDefiners) {
  modelDefiner(sequelize);
}

module.exports = sequelize;