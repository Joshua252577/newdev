// getElementById: busca  o elemento pelo atributo ID do elemento
// Buscamdo elementos dentro da pagina HTML
const buttonSendMessage = document.getElementById('buttonSendMessage');
console.log('buttonSendMessage', buttonSendMessage);

// QuerySelector: retorna o primeiro elemento que ele encontrar
const input = document.querySelector('input');
console.log('input selector', input);

//QuerySelectorAll: retorna um array de elementos que encontrar 
//buscando pela tag
const inputs = document.querySelectorAll('inputs');
console.log('inputs', inputs);
//pegando um elemento pelo indice do mesmo
console.log('input email:', inputs[2]);

//buscando pelo id:
const texto = document.querySelectorAll('#texto');
console.log('texto:', texto);

//buscando pela classe:
const social = document.querySelector('.social');
console.log('social:', social);


const p = document.createElement('p');
console.log('p', p);