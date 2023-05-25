const { get_geisel_list, add_to_geisel_list, remove_from_geisel_list } = require('../services/dict_services.js');


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
    },

    removeList: (req ,res) => {
        try {
            listnames = get_geisel_list();
            uuid = req.body.uuid;
            while(!listnames.has(uuid)){
                uuid = req.body.uuid;
            }
            remove_from_geisel_list(uuid);
        }
        catch (err){
            res.status(500).send(err);
        }
    }
}
