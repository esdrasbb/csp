const http = require('http')
const csp = require('node-csp')
const fs = require('fs')
 
const options = {
  directives: {
    defaultSrc: ['self', 'maxcdn.bootstrapcdn.com'],
    scriptSrc: ['self', 'code.jquery.com', '@nonce']
  },
  nonce: '614d9122-d5b0-4760-aecf-3a5d17cf0ac9' // make sure to have unique nonce for each request 
}
 
http.createServer(function (req, res) {
  const html = fs.readFile(__dirname + '/index.html', function (err, contents) {
    csp.add(req, res, options)
    res.writeHead(200)
    res.write(contents)
    res.end()
  })
}).listen(4000)
console.log('Server running at http://127.0.0.1:4000/');