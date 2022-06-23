let deveres = [];

let identificadorQueTaSendoEditado = null;

const loadTarefa = () => {
  const itemsJaArmazenados = localStorage.getItem('listaDeTarefas');
  return itemsJaArmazenados ? JSON.parse(itemsJaArmazenados) : [];
}

const onClickEdit = (element) => {
  const identificadorASerEncontrado = 
    element.getAttribute('identificador');

  identificadorQueTaSendoEditado = +identificadorASerEncontrado;
  
  const tarefas = loadTarefa();
  console.log('carregar tarefas', tarefas);
  let tarefaEncontrada = {
    tarefa: '',
    data: '',
  };

  tarefas.forEach((assignment, identificador) => {
    if (identificador === +identificadorASerEncontrado) {
      tarefaEncontrada.tarefa = assignment.tarefa;
      tarefaEncontrada.data = assignment.data;
    }
  });

  document.getElementById('tarefa').value = tarefaEncontrada.tarefa;
  document.getElementById('data').value = tarefaEncontrada.data;

  console.log('tarefaEncontrada', tarefaEncontrada);
}

const onClickRemove = (element) => {
  const identificadorASerEncontrado = 
  +element.getAttribute('identificador');

  const assignments = loadTarefa();

  assignments.splice(identificadorASerEncontrado, 1);
  
  localStorage.setItem('listaDeTarefas', JSON.stringify(assignments));
  listTarefa();
}

const salvarRegistroEditado = (registroSendoEditado) => {
  const assignments = loadTarefa();
  const carrosAtualizados = assignments.map((assignment, index) => { 
    if (identificadorQueTaSendoEditado === index) {
      assignment.tarefa = registroSendoEditado.tarefa;
      assignment.data = registroSendoEditado.data
    }
    return assignment;
  })

  localStorage.setItem('listaDeTarefas', JSON.stringify(tarefasFeitas));

  identificadorQueTaSendoEditado = null;

  listTarefa();
  document.querySelector('form').reset();
}


const span = (identificador) => {
  const span = document.createElement('span');
  const iconRemove = document.createElement('i');
  iconRemove.setAttribute('class', 'fas fa-trash');
  iconRemove.setAttribute('title', 'Remover');
  iconRemove.setAttribute('identificador', `${identificador}`);
  iconRemove.setAttribute('onclick', `onClickRemove(this)`);
  iconRemove.setAttribute('style', 'cursor:pointer; margin-inline: 1rem;');

  span.appendChild(iconRemove);
  
  return span;
} 

const listTarefa = () => {
  const tarefas = loadTarefa();
  
  let ul = document.querySelector('ul');
  if (ul) {
    ul.remove();
  }
  
  ul = document.createElement('ul');
 
  tarefas.forEach((item, identificador) => {
    const li = document.createElement('li');
    
    li.innerHTML = 
    
    `Tarefa: ${item.tarefa} 
      Data: ${item.data}`;

    li.appendChild(span(identificador))
    ul.appendChild(li);
  });
  
  document.getElementById('section-tarefas').appendChild(ul);
}

listTarefa();

const addTarefa = (event) => {
  event.preventDefault();

  const tarefa = {
    tarefa: document.getElementById('tarefa').value,
    data: document.getElementById('data').value,
  }

  if (identificadorQueTaSendoEditado || identificadorQueTaSendoEditado === 0) {
    salvarRegistroEditado(tarefa);
    return;
  }
  
  tarefas = loadTarefa();

  tarefas.push(tarefa);
  
  localStorage.setItem('listaDeTarefas', JSON.stringify(tarefas));

  document.querySelector('form').reset();

   listTarefa();
}




const botaoDeAdicionar = document.getElementById('btn');
botaoDeAdicionar.addEventListener('click', addTarefa)