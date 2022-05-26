const buttonSendMessage = 
  document.getElementById('buttonSendMessage');

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

    if (message.length < 3) {
      massages.push(messages);
    }else {
      //Chama  o alert do browser
      alert('o vetor está cheio');
    } 

  //epegando o formulario e utilizando um metodo do form que é o       
  document.getElementById('form-messages').reset();
  console.log('Imprimir vetor', messages);

}

buttonSendMessage.addEventListener('click', addMessages);



