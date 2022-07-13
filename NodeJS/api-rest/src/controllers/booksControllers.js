exports.findAll = (request, response) => {
  const query = request.query;
  console.log('Query string books', query);
  return response.status(200).send('Acessando recurso /books METHOD: GET');
}

exports.create = (request, response) => {
  console.log('Recebendo dados', request.body);
  return response.status(200).send('Acessando recurso /books METHOD: POST');
}

exports.getById = (request, response) => {
  const params = request.params;
  console.log('Query params books', params);
  return response
    .status(200)
    .send(`Acessando recurso /books METHOD: GET BY ID ${params.id}`);
}

exports.deleteById = (request, response) => {
  const params = request.params;
  console.log('Query params books', params);
  return response
    .status(200)
    .send(`Acessando recurso /books METHOD: DELETE BY ID ${params.id}`);
}

exports.put = (request, response) => {
  const params = request.params;
  console.log('Query params books', params);
  return response
    .status(200)
    .send(`Acessando recurso /books METHOD: PUT BY ID ${params.id}`);
}

exports.patch = (request, response) => {
  const params = request.params;
  console.log('Query params books', params);
  return response
    .status(200)
    .send(`Acessando recurso /books METHOD: PATCH BY ID ${params.id}`);
}