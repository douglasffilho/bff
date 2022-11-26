const { productsService } = require('../services')

module.exports = {
  async getProductsBySku(req, res) {
    const { sku } = req.params
    const isMobile = req.headers.mobile

    const product = await productsService.getProductsBySku({ sku, isMobile })

    return res.code(200).send(product)
  }
}
