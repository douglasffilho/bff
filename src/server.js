const { default: fastify } = require('fastify')
const process = require('process')
const app = require('.')

const server = fastify({
  logger: true,
  pluginTimeout: 10000
})

server.register(app)

const port = process.env.PORT ?? 8080
console.log(`will listen at ${port}`)

server.listen({ port, host: '0.0.0.0' }, (err) => {
  if (err) {
    server.log.error(err)
    throw err
  }
})
