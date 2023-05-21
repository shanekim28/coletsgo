const router = require('express').Router();
const getList = require('../controllers/list_controllers.js');
const addList = require('../controllers/list_controllers.js');


router.get('/:id', getList);
router.post('/:id', addList);

module.exports = router;