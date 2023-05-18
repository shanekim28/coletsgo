/* Use this file to expose your routes */
const express = require('express');
const products = require('./routes/example_route.js');
const app = express();

/* TODO: Find better way to do this for multiple models */
const db = require('./repositories/context.js');
const userModel = require('./models/user_model.js')(db.sequelize, db.Sequelize);

userModel.sequelize.sync()
  .then(() => {
    console.log("Synced");
  }).catch((err) => {
    console.log("Failed to sync: " + err);
  });

// Using route '/product' with everything from products, our example route
app.use("/product", products)

module.exports = app