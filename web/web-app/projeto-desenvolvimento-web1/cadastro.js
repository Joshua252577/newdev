let peoples = [];

const loadPeoples = () => {
  const itemsJaArmazenados = localStorage.getItem('listaDePessoas');
  return itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : [];
}
const span = () => {
      const span = document.createElement('span')
      const iconEdit = document.createElement('i')
      iconEdit.setAttribute('class', 'fas fa-edit');
      iconEdit.setAttribute('title', 'Editar');
      iconEdit.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');
      span.appendChild(iconEdit);

      const iconRemove = document.createElement('i');
      iconRemove.setAttribute('class', 'fas fa-trash');
      iconRemove.setAttribute('title', 'Remover');
      iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');
      span.appendChild(iconRemove);

      return span;
}
const listPeoples = () => {
  const peoples = loadPeoples();
  
  let ul = document.querySelector('ul');
  if (ul) {
    ul.remove();
  }
  
  ul = document.createElement('ul');
 
  peoples.forEach((item, index) => {
    const li = document.createElement('li');
    li.innerHTML = `Nome: ${item.name} Idade: ${item.age}, Altura: ${item.height}`
    console.log('ITEMS', item)
    ul.appendChild(li);
  });


  document.getElementById('list-section').appendChild(ul);
}

listPeoples();

const addPeople = (event) => {
  event.preventDefault();
  const people = {
    name: document.getElementById('name').value,
    age: document.getElementById('age').value,
    height: document.getElementById('height').value,
  }
  
  peoples = loadPeoples();

  peoples.push(people);
  
  localStorage.setItem('listaDePessoas', JSON.stringify(peoples));

  document.querySelector('form').reset();

  listPeoples();
}




const botaoDeAdicionar = document.getElementById('btn');
botaoDeAdicionar.addEventListener('click', addPeople)