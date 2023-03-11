const http = require("http");
const path = require("path");

//server
const server = http.createServer((req, res) => {
  const pathName= req.url;
  if( pathName== '/' || pathName== '/overview'){
    res.end('this is the OVERVIEW')
  }else if( pathName== '/product') {
    res.end('this is PRODUCT    ');
  }else {
    res.writeHead(404,{
        'Content-type': 'text/html',
        'my-own-header':'hello-world'
    })
     res.end(" <h3>Page not Found</h3> ");
  }

});
//it takes port and ip adreess as parameter
server.listen(8000, "127.0.0.1", () => {
  console.log("port is listening ");
});
