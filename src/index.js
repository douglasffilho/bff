const path = require('path')
const AutoLoad = require('@fastify/autoload')
const cors = require('@fastify/cors')
const hooks = require('./hooks')

// Pass --options via CLI arguments in command to enable these options.
module.exports.options = {}

module.exports = async (fastify, opts) => {
  fastify.register(cors, {
    origin: '*'
  })

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'plugins'),
    options: Object.assign({}, opts)
  })

  hooks(fastify)

  fastify.register(AutoLoad, {
    dir: path.join(__dirname, 'routes'),
    options: Object.assign({}, opts)
  })
}
