const http = require('http');

http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('BEM VINDO A ESCOLA')
  };

}).listen(5000, () => console.log('===API IS RUNNING ON PORT 5000==='));
