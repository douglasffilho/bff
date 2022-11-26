const { default: axios } = require('axios')
const fs = require('fs')
const path = require('path')

const defaultQuery = fs.readFileSync(path.resolve(__dirname, '../graphql/getProductBySku.graphql')).toString('utf-8')
const mobileQuery = fs
  .readFileSync(path.resolve(__dirname, '../graphql/getProductBySku.mobile.graphql'))
  .toString('utf-8')

const GraphQL = axios.create({ baseURL: 'http://localhost:4000' })

module.exports = {
  async getProductsBySku({ sku, isMobile = false }) {
    const templateQuery = isMobile ? mobileQuery : defaultQuery
    const query = templateQuery.replace(/\${sku}/gi, sku)

    return GraphQL.post('/graphql', { query })
      .then((response) => response?.data?.data ?? {})
      .catch((error) => {
        console.error(error)
        return null
      })
  }
}
