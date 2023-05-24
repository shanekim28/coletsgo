const router = require('express').Router();
const { getList, addList } = require('../controllers/list_controllers.js');

router.get('/', getList);
router.post('/', addList);

module.exports = router;