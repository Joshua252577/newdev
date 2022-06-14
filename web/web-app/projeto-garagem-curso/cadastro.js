const botao = document.getElementById('btn')
botao.addEventListener('click', cadastro)

let identificadorQueTaSendoEditado = null

const carregarCarros = () => {
  const itemsJaArmazenados = localStorage.getItem('listaDeCarros')
  return itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : []
}

const carros = carregarCarros();
  console.log('carregar carros', carros);
  let carrosEncontrados = {
    marca: '',
    modelo: '',
    ano: ''
  }
carros.forEach((carro, identificador) => {
  if (identificador === +identificadorASerEncontrado) {
    carroEncontrado.marca = carro.marca;
    carroEncontrado.modelo = carro.modelo;
    carroEncontrado.ano = carro.ano; 
  }
});

document.getElementById('marca').value = carrosEncontrado.marca;
document.getElementById('modelo').value = carroEncontrado.modelo;
document.getElementById('ano').value = carroEncontrado.ano;

console.log('carro encontrado', carroEncontrado);

const valores = carregarCarros();

valores.splice(identificadorASerEncontrado, 1);

localStorage.setItem('listaDeCarros', JSON.stringify(valores))

identificadorQueTaSendoEditado = null

listaDeCarros();
document.querySelector('form').reset();

const listaDeCarros = () => {
  const carros = carregarCarros()
  
  let ul = document.querySelector('ul')
  if (ul) {
    ul.remove()
  }
  
  ul = document.createElement('ul')
  
  carros.forEach((item, index) => {
    const li = document.createElement('li')
    li.innerHTML = `Marca: ${item.marca}, Modelo: ${item.modelo}, Ano: ${item.ano}`
    console.log('listagem dos carros', li)
    li.appendChild(span(index))
    ul.appendChild(li)
  })
  document.getElementById('list-section').appendChild(ul);
  
  listaDeCarros();
  
  function cadastro(event) {
    event.preventDefault()
    const valorImputs = {
      marca: document.getElementById('marca').value,
      modelo: document.getElementById('modelo').value,
      ano: document.getElementById('ano').value
    }
    console.log('pegando os valores dos ids', valorImputs)
  }
  
}
