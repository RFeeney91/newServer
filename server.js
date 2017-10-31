var http = require('http')

var PORT = process.env.PORT || 7000
// localhost === 127.0.0.1

var PORT = process.env.PORT || 7500

function handleRequest(request, response) {
  console.log(request.url)
  response.end('OMG It works? ' + request.url)
}

var server = http.createServer(handleRequest)

server.listen(PORT, function() {
  console.log('Listening on port: ', PORT)
})
