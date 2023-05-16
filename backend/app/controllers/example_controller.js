/* Example controller module */
const getProductById = require('../services/example_service.js')

module.exports = {
	getProduct: (req, res) => {
		try {
			// Request parameters
			const id = req.params.id
			// getProductById is imported from example service
			const product = getProductById(id);
			// Send response
			res.send(product);
		}
		catch (err) {
		res.status(500).send(err)
		}
	}
}
