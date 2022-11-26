const products = require('../../../controllers/products')
const schema = require('../../../schemas/v1/products')

module.exports = (api, _opts, done) => {
  const opts = {
    schema,
    handler: products.getProductsBySku
  }
  api.get('/:sku', opts)

  done()
}
