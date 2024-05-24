const { Ignitor } = require('@adonisjs/core/build/src/Ignitor')
const { Application } = require('@adonisjs/core/build/src/Ignitor')

new Ignitor(new Application(__dirname, 'production'))
  .httpServer()
  .start()
  .catch(console.error)
