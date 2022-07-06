const http = require('http');
const URL = require('url');
let receitas = require('./receitas.json');

const getReceitas = (request, response) => {
  const {nome, quantidade, unidade, remover} = URL.parse(request.url, true).query

  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  })

  if (nome) {
    const receita = {nome, quantidade, unidade}
}

}
http.createServer(getReceitas)
  .listen(3003, () => console.log('server is listening on http://localhost:3003'));
