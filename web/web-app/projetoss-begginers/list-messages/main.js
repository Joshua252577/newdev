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
    alert('O remetente deve ser informado!')
    return
  }

  // o trim remove os espaços do inicio e do final da string
  textArea.value = textArea.value.trim()

  console.log('aa', textArea.value)
  if (!textArea.value.length) {
    alert('O remetente deve ser informado!')
    return
  }
  const message = {
    from: inputFrom.value,
    to: inputTo.value,
    message: textArea.value
  }
  console.log('.', message)

  const sessionMessages = document.getElementById('section-messages')

  //buscamos uma lista nao ordenada dentro da seção, para validarmos se existe ou não, se nao existir, criamos ela
  let ul = sessionMessages.querySelector('ul')

  if (!ul) {
    //criamos uma lista nao ordenada
    ul = document.createElement('ul')
    //adiciona dentro da seção
    sessionMessages.appendChild(ul)
  }

  document.getElementById('form-message').reset()

  const li = document.createElement('li')
  li.innerHTML = `De: ${message.from} Para: ${message.to} mensagem: ${message.message}`

  ul.appendChild(li)
}
buttonAddMassege.addEventListener('click', addMessege)
