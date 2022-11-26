const { default: fastify } = require('fastify')
const { default: fp } = require('fastify-plugin')
const app = require('../src')

module.exports = () => {
  const server = fastify()

  beforeAll(async () => {
    server.register(fp(app))
    await server.ready()
  })

  afterAll(() => {
    server.close()
  })

  return server
}
