const return_geisel_list = require('../services/dict_services.js');
const add_to_geisel_list = require('../services/dict_services.js');


const getList = (req, res) => {
    try {
        const listnames = return_geisel_list();

        res.send(listnames);
    }
     catch (err) {
         res.status(500).send(err);
     }
}

const addList = (req, res) => {
    try {
        const id = req.params.id;
        add_to_geisel_list(id);
        const listnames = return_geisel_list();

        res.send(listnames);
     }
     catch (err) {
         res.status(500).send(err);
     }
}

module.exports = getList;
module.exports = addList;
