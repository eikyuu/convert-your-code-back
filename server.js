const { Ignitor } = require('@adonisjs/ignitor')
const http = require('http')

const server = http.createServer((req, res) => {
  new Ignitor(require('@adonisjs/fold'))
    .appRoot(__dirname)
    .fireHttpServer()
    .then(() => {
      const handleRequest = require('server')
      handleRequest(req, res)
    })
})

server.listen(process.env.PORT || 3000)
