const http = require('http');
const URL = require('url');
const fs = require('fs');
const path = require('path');
let recipe = require('./recipe.json');

http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('API is only available');
  }

  if (req.url === '/receitas') {
    let { title, del, ingredients } = URL.parse(req.url, true).query;
  
    if (ingredients) {
      ingredients = ingredients.split('-');
    }
  
    console.log('como esta chegando ?', ingredients);
    if (!title) {
      return res.end(JSON.stringify(recipe));
    }
  
    if (del) {
      recipe = recipe.filter(recipe => recipe?.title !== title);
    } else {
      recipe.push({
        title,ingredients
      });
    }
  
    fs.writeFile(
      path.join(__dirname, 'recipe.json'),
      JSON.stringify(recipe),
      (err) => {
        if (err) throw err;
  
        return res.end(JSON.stringify({
          status: 'Record saved successfully',
        }))
      }
    );
  }

  if (req.url === '/users') {
    res.end('Tentando acessar os usuarios')
  }

  if (req.url === '/livros') {
    res.end('Tentou acessar livros')
  }
}).listen(3000, () => console.log('API is running on port 3000'));