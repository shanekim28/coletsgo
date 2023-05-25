const router = require('express').Router();
const { getList, addList, removeList } = require('../controllers/list_controllers.js');

router.get('/', getList);
router.post('/', addList);
router.delete('/', removeList);

module.exports = router;