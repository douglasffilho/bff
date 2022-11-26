const HealthController = require('../controllers/health')

module.exports = (api, _opts, done) => {
  api.get('/', HealthController.check)

  done()
}
