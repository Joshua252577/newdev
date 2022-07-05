
const exemplo = 'EXEMPLO MAIS LOUCO DO MUNDO' ;

// Funão async
const loadData = async () => {
  const  response = await  fetch('http://localhost:3001');

  console.log('resposta do meu servidor forma 1', await response.json());    
}

loadData();



fetch('http://localhost:3001') // execute essa requisição para mim
. then((response) => {// se isso der certo...
console.log('Isso deu certo', response);// emprima para mim
})
.catch((error) => { // se isso não deu certo...
console.log('isso não deu certo', error); // emprima para mim
})
.finally(() => {// se isso deu certo ou errado...
  console.log('Requisição finalizou');// emprima para mim
})