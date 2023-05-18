const { port } = require('./config')
const app = require('./app');

const listening_port = port || '3000'
app.listen(listening_port)
console.log("Successfully started listening on port " + listening_port)