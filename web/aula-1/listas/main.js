const buttonSendMessage = document.getElementById('buttonSendMessage');

const messages = [];

function addMessage(event) {
  event.preventDefault(); // Desabilita o evento padrão do elemento
  const inputName = document.getElementById('name');
  const inputemail = document.getElementById('email');
  const inputmessage = document.getElementById('messages');

  const message = {
    name: inputName.value,
    email: inputemail.value,
    message: inputmessage.value
  }
  document.getElementById('form-messages').reset();
  console.log('...', message);

  buttonSendMessage.addEventListener('click',addMessageToMessages);
}