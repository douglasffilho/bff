module.exports = (api) => {
  api.addHook('onRoute', require('./onRoute').register)
}
