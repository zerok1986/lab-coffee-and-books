module.exports = (app) => {
  // Base routes
  app.use('/', require('./base.routes'))

  // Place routes
  app.use('/places', require('./places.routes'))

  // Maps routes
  app.use('/api', require('./api.routes'))
}
