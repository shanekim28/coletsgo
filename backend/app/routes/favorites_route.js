const express = require('express');
const router = express.Router();
const { addFavorite, removeFavorite } = require('../controllers/favorites_controllers.js');

router.post('/',addFavorite);
router.delete('/',removeFavorite);

module.exports = router;
