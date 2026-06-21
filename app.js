const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200);
    res.end('Hello from Jenkins Pipeline! Muhammad Sameer here\n with the student ID: SE242004');
}).listen(3000, () => console.log('Running on port 3000'));
