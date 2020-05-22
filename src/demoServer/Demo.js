let user = require('./User');
let url = require('url');
let util = require('util')
console.log(`userName ${user.userName}, I say ${user.sayHello()}`);

let http = require('http');
let server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain; charset=utf-8");



  res.end(util.inspect(url.parse(req.url)));

});

server.listen(3001, '127.0.0.1', () =>{
  console.log("demoServer started");
});
