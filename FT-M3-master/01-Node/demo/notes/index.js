var fs = require('fs')
fs.readFile('./greet.txt', 'utf8', function (err, data) {
  console.log(data)
})
console.log('listo')