let countRow = 0
const onClickEdit  (idRecord) {
  console.log('Chamou a função editar');
}
{
const buttonAddMassege = document.getElementById('addButton')

function addMessege(event) {
  event.preventDefault()

  const inputFrom = document.getElementById('from')
  const inputTo = document.getElementById('to')
  const textArea = document.getElementById('massage')

  if (!inputFrom.value.length) {
    alert('O remetente deve ser informado!')
    return
  }

  if (!inputTo.value.length) {
    alert('O destinatario deve ser informado!')
    return
  }

  // o trim remove os espaços do inicio e do final da string
  textArea.value = textArea.value.trim()

  console.log('aa', textArea.value)
  if (!textArea.value.length) {
    alert('A mensagem deve ser escrita!')
    return
  }
  const message = {
    from: inputFrom.value,
    to: inputTo.value,
    message: textArea.value
  }
  /* console.log('.', message)

  const sessionMessages = document.getElementById('section-messages')

  //buscamos uma lista nao ordenada dentro da seção, para validarmos se existe ou não, se nao existir, criamos ela
  let ul = sessionMessages.querySelector('ul')

  if (!ul) {
    //criamos uma lista nao ordenada
    ul = document.createElement('ul')
    //adiciona dentro da seção
    sessionMessages.appendChild(ul)
  }

  
  const li = document.createElement('li')
  li.innerHTML = `De: ${message.from} Para: ${message.to} mensagem: ${message.message}`
  
  ul.appendChild(li) */

  document.getElementById('form-message').reset()

  let tbody = document.getElementById('tbody-messages')

  const tr = document.createElement('tr')

  //primeira coluna
  const tdFrom = document.createElement('td')
  tdFrom.innerHTML = message.from

  //segunda coluna
  const tdTo = document.createElement('td')
  tdTo.innerHTML = message.to

  //terceira coluna
  const tdMessage = document.createElement('td')
  tdMessage.innerHTML = message.message

  tr.appendChild(tdFrom)
  tr.appendChild(tdTo)
  tr.appendChild(tdMessage)


  }

  const iconEdit = document.createElement('i')
  iconEdit.setAttribute('class', 'fa-edit')
  iconEdit.setAttribute('style', 'cursor:pointer');
  iconEdit.setAttribute('onclick', `onClickEdit();`)
  tdButtons.appendChild(iconEdit)

  
  const iconRemove = document.createElement('td')
  iconRemove = document.setAttribute('class', 'fas fa-trash');
  iconRemove.setAttribute('style', 'cursor:pointer');
  tdButtons.appendChild(iconRemove);
  
  tr.appendChild(tdButtons)
  
  // precisamos identificar a linha
  tr.setAttribute('id', countRow)
  countRow += 1

  console.log('pegar elemento pai', tdButtons.parentElement.id)
  
  tr.appendChild(tdButtonEdit)
  
  tbody.appendChild(tr)
}
buttonAddMassege.addEventListener('click', addMessege)
