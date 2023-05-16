/* Example routes file */
const router = require('express').Router()
const controllers = require('../controllers/example_controller.js')

// TODO routers here
// Example product route that takes id as a parameter
router.get('/:id', controllers.getProduct);

module.exports = router;