const routes = []

module.exports = {
  register(routeOptions) {
    if (routeOptions.prefix) {
      const route = {
        method: routeOptions.method,
        url: routeOptions.url,
        schema: routeOptions.schema
      }
      routes.push(route)
    }
  },
  list() {
    return routes
  }
}
