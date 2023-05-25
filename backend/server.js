const { port } = require('./config')
const app = require('./app');
const sequelize = require("./context/dbcontext");

const assertDatabaseConnectionOk = async () => {
  console.log("Checking database connection...");
  try {
    await sequelize.authenticate();
    console.log("Database connection OK");
  } catch (err) {
    console.log("Unable to connect to the database. Reason: ");
    console.log(err.message);
    process.exit(1);
  }
}

const init = async () => {
  await assertDatabaseConnectionOk();

  const listening_port = port || '3000'
  app.listen(listening_port)
  console.log("Successfully started listening on port " + listening_port)
}

init();