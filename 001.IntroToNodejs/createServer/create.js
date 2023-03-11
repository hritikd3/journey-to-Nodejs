const http= require('http')

//server 
const server=http.createServer((req,res)=>{
    //we can see the res coming 
console.log(req)
    res.end('hello from the server')
})
//it takes port and ip adreess as parameter
server.listen(8000, '127.0.0.1', ()=>{
    console.log('port is listening ')
})