const app = require('express')()
const PORT = 4040;

//const people_in_geisel = require('../dictnames.js').default
const people_in_geisel = require('../dictnames');
var array_PIG = Object.values(people_in_geisel)

app.listen(
    PORT,
    () => console.log(`it's alive on http://localhost:${PORT}`)
)

app.get('/api/list', (req, res) => {
    res.status(200).send(
        array_PIG
    )
});