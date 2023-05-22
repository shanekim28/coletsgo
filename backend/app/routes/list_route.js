const router = require('express').Router();
const { getList, addList } = require('../controllers/list_controllers.js');


router.get('/:id', getList);
router.post('/:id', addList);

module.exports = router;