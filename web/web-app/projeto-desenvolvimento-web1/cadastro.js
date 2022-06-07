let peoples = [];

const addPeoples = (event) => {
  event.preventDefault();

  const people = {

    name: document.getElementById('name').value,
    sobrenome: document.getElementById('sobrenome').value,
    ddd: document.getElementById('ddd').value,
    fone: document.getElementById('fone').value,
    email: document.getElementById('email').value,
    endereco: document.getElementById('endereco').value,
    complemento: document.getElementById('complemento').value
  }

  const itemsJaArmazenados = localStorage.getItem('diferente')

  peoples.push(people);


  localStorage.setItem('diferente', JSON.stringify(peoples));

document.querySelector('form').reset();


  const items = localStorage.getItem('diferente');
  const itemsSerialized = JSON.stringify(items)

  let ul  = document. querySelector ('ul')
  if (!ul) {
    ul = document.createElement('ul');
  }

  console.log('node list ul' + ul.childNodes);
  itemsSerialized.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `Nome: ${item.name} Sobrenome: ${item.sobrenome} ddd: ${item.ddd} fone: ${item.fone} email: ${item.email} endereco: ${item.endereco} complemento: ${item.complemento}`;
    console.log('ITEMS' + item)
    ul.appendChild(li);
  });
  
  document.getElementById('list-section').appendChild(ul);


 /* if (names.length) {
    const ul = document.createElement('ul')

    names.forEach(item => {
      const li = document.createElement('li')
      li.innerHTML = `${item.name} ${item.sobrenome} ${item.ddd} ${item.fone} ${item.email} ${item.endereco} ${item.complemento}`
      ul.appendChild(li)
    })

    document.getElementById('list-section').appendChild(ul)
  }
}*/

const botaoDeAdicionar = document.getElementById('addButton');
botaoDeAdicionar.addEventListener('click', addNames);
}
