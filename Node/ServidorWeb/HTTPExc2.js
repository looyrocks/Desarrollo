const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
   
    let filename = "";

    if(req.url==="/"){
        filename = 'index.html';
    }else{
        filename = '404.html';
    }

    fs.readFile(filename, (err,data) => {
            if(err){
                res.writeHead(500, {"content-type": "text/plain"});
                res.end('Server Error');
                return;
            }else{
                res.writeHead(filename === '404.html' ? 404:200, {"content-type":"text/html"});
                res.end(data);
            }
    })

});


server.listen(3000);
console.log('Listening on port 3000...');
