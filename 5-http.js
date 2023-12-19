const http = require('http');

const server = http.createServer((req, res) => {
    if(req.url === '/') {
     
        res.end('Welcome to our homepage');
    } else if(req.url === '/about') {
        res.end('Welcome to about page');
    } else {
        res.end(`<p>404 No Page Found</p>`);
    }

    
})

server.listen(80)