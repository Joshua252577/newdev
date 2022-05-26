// JAVASCRIPT: uma lingagem de programação

//POO: Progrmação orientada à objetos
//Atributosd e Métodos(funções)

//Exemplo de atributos: cor, altura, largura etc.
//Exemplos de Métodos/Funções: frear, acelerar, virarADireita

// A convenção da declaração de vareável deve ser seguida:

// Por convenção, é possível declarar CONSTANTE  e possui

// variável NÃO DEVE iniciar com NÚMEROS
// variável NÃO DEVE iniciar com caracteres especiais(*,&,%)
// vareável NÃO DEVE iniciar com letra caixa ALTA: exemplo errado: Banana. exemplo correto: banana

// Variável NÃO DEVE ter acentos

// varáveis DEVEM possuir um valor semântico (FAZER SENTIDO)
// Exemplo ruim: banana. a, b, c, x, y, n1, n2. n3
// Exemplo bom: numeroParcelas, nomeUsuario, ederecoUsuario

// Funções DEVEM segur as mesmas convenções e devem ter valor semântico

/*         Exemplos        */

let nomeVariavel = 1
let numeroParcelas = 200

// 1° método de criar uma função, atribui-la à uma variável
let somaValores = function () {
  console.log('somando valores')
}

// Chamar/Invocar/conjurar/acionar
somaValores()

// named function
function subtraiValores() {
  console.log('subtrai')
}
subtraiValores();

// 3° método 
const carro = {
  cor: 'vermelho', // atributo
  andar: function () { // método
    console.log('andando')
  }
}

carro.andar();  

// 4° método Arrow function
const multiplicaValores = () => {
  console.log('multiplicaValores', multiplicaValores);
}

multiplicaValores();



