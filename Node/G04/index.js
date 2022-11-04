const { Console } = require('console')
const http = require('http')

const puerto = 3000

http.createServer(function(request,response){
    console.log(request.url)
    if (request.url == "/registro")
        console.log("estas solicitando registro")
    response.write("Hola grupo G04!")
    response.end()
}).listen(puerto)

console.log("servidor activo en el puerto: " + puerto)