let carros = []

let identificadorQueTaSendoEditado = null

const carregarCarros = () => {
  const itemsJaArmazenados = localStorage.getItem('listaDeCarros')
  return itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : []
}

const onClickEdit = element => {
  const identificadorASerEncontrado = element.getAttribute(' identificador')

  identificadorQueTaSendoEditado = +identificadorASerEncontrado

  const carros = carregarCarros()
  console.log('carregar carros', carros)
  let carrosEncontrados = {
    marca: '',
    modelo: '',
    ano: ''
  }

  carros.forEach((item, identificador) => {
    if (identificador === +identificadorASerEncontrado) {
      carroEncontrado.marca = item.marca
      carroEncontrado.modelo = item.modelo
      carroEncontrado.ano = item.ano
    }
  })

  document.getElementById('marca').value = carrosEncontrado.marca
  document.getElementById('modelo').value = carroEncontrado.modelo
  document.getElementById('ano').value = carroEncontrado.ano

  console.log('carro encontrado', carroEncontrado)
}

const salvarRegistroEditado = regisdtroSendoEditado => {  
  const cars = carregarCarros()
  const carrosAtualizados = cars.map((car, index) => {
    if (identificadorQueTaSendoEditado === index) {
      car.marca = regisdtroSendoEditado.marca
      car.modelo = regisdtroSendoEditado.modelo
      car.ano = regisdtroSendoEditado.ano
    }
    return car
  })

  localStorage.setItem('listaDeCarros', JSON.stringify(carrosAtualizados))

  identificadorQueTaSendoEditado = null

  listaDeCarros()
  document.querySelector('form').reset()
}

const span = identificador => {
  const span = document.createElement('span')
  const iconEdit = document.createElement('i')
  iconEdit.setAttribute('class', 'fas fa-edit')
  iconEdit.setAttribute('title', 'Editar')

  iconEdit.setAttribute('identificador', `${identificador}`)
  iconEdit.setAttribute('onclick', `onClickEdit(this)`)
  iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;')

  span.appendChild(iconEdit)

  return span
}

const listaDeCarros = () => {
  const carros = carregarCarros()

  let ul = document.querySelector('ul')
  if (ul) {
    ul.remove()
  }

  ul = document.createElement('ul')

  carros.forEach((item, identificador) => {
    const li = document.createElement('li')
    li.innerHTML = `Marca: ${item.marca} 
      Modelo: ${item.modelo}, 
      Ano: ${item.ano}`

    li.appendChild(span(identificador))
    ul.appendChild(li)
  })

  document.getElementById('list-section').appendChild(ul)
}

listaDeCarros()

const adicionarCarro = event => {
  event.preventDefault()

  const carro = {
    marca: document.getElementById('marca').value,
    modelo: document.getElementById('modelo').value,
    ano: document.getElementById('ano').value
  }
  console.log('proximo valor a ser registrado', identificadorQueTaSendoEditado)
  if (identificadorQueTaSendoEditado || identificadorQueTaSendoEditado === 0) {
    salvarRegistroEditado(carro)
    return
  }

  carros = carregarCarros()

  console.log('proximo carro registrado')
  carros.push(carro)

  localStorage.setItem('listaDeCarros', JSON.stringify(carros))

  document.querySelector('form').reset()

  listaDeCarros()
}

const botaoDeAdicionar = document.getElementById('btn')
botaoDeAdicionar.addEventListener('click', adicionarCarro)
