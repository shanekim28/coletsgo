const { get_geisel_list, add_to_geisel_list } = require('../services/dict_services.js');
const { models } = require('../../context/dbcontext');

module.exports = {
    getList: (req, res) => {
        try {
            const listnames = get_geisel_list();
            res.send(listnames);
        }
        catch (err) {
            res.status(500).send(err);
        }
    },

    addList: (req, res) => {
        try {
            console.log(req.body);
            uuid = add_to_geisel_list(req.body.name, req.body.floor);
            res.send({ "userId": uuid });
        }
        catch (err) {
            res.status(500).send(err);
        }
    }
}
