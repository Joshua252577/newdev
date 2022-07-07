const http = require ('http');
const fs = require ('fs');
const path = require ('path')

const server = http.createServer((request,response) => {
 console.log('server web');

 const url =request.url;

let file = url === '/' ? 'index.html': request.url

if (url === '/cadastro') {
  file = 'cadastro-De-Veiculos.html'
}

const filePath = path.join(__dirname, 'public',file)

})
server.listen(3005, () =>{
  console.log('Server WEB is listening on http://localhost:3005')
})