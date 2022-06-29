const http = require('http')
const URL = require('url');
const users = require('./users.json')

console.log('users', users)

 http.createServer((request, response) => {
   const query = URL.parse(request.url, true).query
   console.log('query', query)
   console.log('url', request.url)

    response.end(JSON.stringify(users))
  }).listen(3001, () => {
    console.log('API is running on port 3001')
  })
