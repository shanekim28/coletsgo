const { get_geisel_list, add_to_geisel_list } = require('../services/dict_services.js');


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
            const id = req.params.id;
            add_to_geisel_list(id);
            const listnames = get_geisel_list();
    ``
            res.send(listnames);
        }
        catch (err) {
            res.status(500).send(err);
        }
    }
}
