const routesHook = require('../hooks/onRoute')
const pack = require('../../package.json')

module.exports = {
  async check(_req, res) {
    return res.code(200).send({
      apiStatus: 'OK',
      name: pack.name,
      version: pack.version,
      routes: routesHook.list()
    })
  }
}
