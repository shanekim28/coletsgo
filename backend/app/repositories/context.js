const { dbuser, dbpass, db, dbhost, dbport } = require('../../config');
const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize(`postgres://${dbuser}:${dbpass}@${dbhost}:${dbport}/${db}`, {
  logging: console.log,
});

const context = {};

context.Sequelize = Sequelize;
context.sequelize = sequelize;

module.exports = context;