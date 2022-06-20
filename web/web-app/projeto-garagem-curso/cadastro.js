let carros = [];

let identificadorQueTaSendoEditado = null;

const loadCarros = () => {
  const itemsJaArmazenados = localStorage.getItem('listaDeCarros');
  return itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : [];
}

const onClickEdit = (element) => {
  const identificadorASerEncontrado = 
    element.getAttribute('identificador');

  identificadorQueTaSendoEditado = +identificadorASerEncontrado;
  
  const carros = loadCarros();
  console.log('carregar carros', carros);
  let carroEncontrado = {
    marca: '',
    modelo: '',
    ano: ''
  };

  carros.forEach((car, identificador) => {
    if (identificador === +identificadorASerEncontrado) {
      carroEncontrado.modelo = car.modelo;
      carroEncontrado.marca = car.marca;
      carroEncontrado.ano = car.ano;
    }
  });

  document.getElementById('marca').value = carroEncontrado.marca;
  document.getElementById('modelo').value = carroEncontrado.modelo;
  document.getElementById('ano').value = carroEncontrado.ano;

  console.log('carroEncontrado', carroEncontrado);
}

const onClickRemove = (element) => {
  const identificadorASerEncontrado = 
  +element.getAttribute('identificador');

  const cars = loadCarros();

  cars.splice(identificadorASerEncontrado, 1);
  
  localStorage.setItem('listaDeCarros', JSON.stringify(cars));
  listCarros();
}

const salvarRegistroEditado = (registroSendoEditado) => {
  const cars = loadCarros();
  const carrosAtualizados = cars.map((car, index) => { 
    if (identificadorQueTaSendoEditado === index) {
      car.name = registroSendoEditado.marca;
      car.age = registroSendoEditado.modelo;
      car.height = registroSendoEditado.ano;
    }
    return car;
  })

  localStorage.setItem('listaDeCarros', JSON.stringify(carrosAtualizados));

  identificadorQueTaSendoEditado = null;

  listCarros();
  document.querySelector('form').reset();
}


const span = (identificador) => {
  const span = document.createElement('span');
  const iconEdit = document.createElement('i');
  iconEdit.setAttribute('class', 'fas fa-edit');
  iconEdit.setAttribute('title', 'Editar');

  iconEdit.setAttribute('identificador', `${identificador}`);
  iconEdit.setAttribute('onclick', `onClickEdit(this)`);
  iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');

  span.appendChild(iconEdit);

  const iconRemove = document.createElement('i');
  iconRemove.setAttribute('class', 'fas fa-trash');
  iconRemove.setAttribute('title', 'Remover');
  iconRemove.setAttribute('identificador', `${identificador}`);
  iconRemove.setAttribute('onclick', `onClickRemove(this)`);
  iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');

  span.appendChild(iconRemove);
  
  return span;
} 

const listCarros = () => {
  const carros = loadCarros();
  
  let ul = document.querySelector('ul');
  if (ul) {
    ul.remove();
  }
  
  ul = document.createElement('ul');
 
  carros.forEach((item, identificador) => {
    const li = document.createElement('li');
    li.innerHTML = 
    
    `Marca: ${item.marca} 
     Modelo: ${item.modelo}, 
     Ano: ${item.ano}
     `;

    li.appendChild(span(identificador))
    ul.appendChild(li);
  });
  
  document.getElementById('list-section').appendChild(ul);
}

listCarros();

const addCarro = (event) => {
  event.preventDefault();

  const carro = {
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value,
    ano: document.getElementById('ano').value,
  }
  console.log('after save registry', identificadorQueTaSendoEditado);
  if (identificadorQueTaSendoEditado || identificadorQueTaSendoEditado === 0) {
    salvarRegistroEditado(carro);
    return;
  }
  
  carros = loadCarros();

  console.log('after save registry');
  carros.push(carro);
  
  localStorage.setItem('listaDeCarros', JSON.stringify(carros));

  document.querySelector('form').reset();

   listCarros();
}




const botaoDeAdicionar = document.getElementById('btn');
botaoDeAdicionar.addEventListener('click', addCarro)