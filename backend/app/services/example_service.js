/* Example service module */
const getProductById = (id) => {
  // Everything below is example business logic, it can be whatever you need, e.g. database access, etc.
  const alphabet = "abcdefghijklmnopqrstuvwxyz"
  let result =  ''
  for (let i = 0; i < 5; i++) {
    result += alphabet[Math.floor(Math.random() * alphabet.length)]
  }

  return {
    productId: id,
    productCode: result
  }
}

module.exports = getProductById