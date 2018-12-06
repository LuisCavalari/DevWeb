const mod = require('http')

mod.createServer((res,req)=>{
    req.write('Bereguejonson')
    req.end()
}).listen(8080)