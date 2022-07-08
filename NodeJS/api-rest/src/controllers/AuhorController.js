exports.findAll = (request, response) => {
  const query = request.query;
  console.log('Query string authors', query);
  return response.status(200).send('Acessando recurso /authors METHOD: GET');
}

exports.create = (request, response) => {
  console.log('Recebendo dados', request.body);
  return response.status(200).send('Acessando recurso /authors METHOD: POST');
}

exports.getById = (request, response) => {
  const params= request.params;
  console.log('Query params authors', params);
  return response.status(200).send(`Acessando recurso /authors METHOD: GET BY ID ${params.id}`) ;
}

exports.deleteById = (request, response) => {
  const params= request.params;
  console.log('Query params authors', params);
  return response.status(200).send(`Acessando recurso /authors METHOD: GET BY ID ${params.id}`) ;
}

exports.put= (request, response) => {
  const params= request.params;
  console.log('Query params authors', params);
  return response.status(200).send(`Acessando recurso /authors METHOD: GET BY ID ${params.id}`) ;
}

exports.patch = (request, response) => {
  const params= request.params;
  console.log('Query params authors', params);
  return response.status(200).send(`Acessando recurso /authors METHOD: GET BY ID ${params.id}`) ;
}