programa
{
	
	funcao inicio() {
		inteiro opcao =1, quant, repeticao, posicao =0, carroDigitado
		cadeia veiculos[200]

		enquanto (opcao != 0){
			menu()
			leia(opcao)
			escolha(opcao){
			caso 0: 
				escreva("\n||SAIR...        ||")
				escreva("\n||VOLTE SEMPRE...||")
				pare
			caso 1:
				escreva("\nOperação cadastrar veículos")
				escreva("\nQuantos veículos deseja cadastrar? ")
				leia(repeticao)
					para(inteiro i=0; i < repeticao; i++){
		
				escreva("\nDigite qual veículo deseja cadastrar: ")
				leia(veiculos[posicao])
				posicao++
					}
				pare
			caso 2: 
				escreva("Operação listar veículos")
					para(inteiro i=0; i < 4; i++){
						escreva("\n", i, ") ", veiculos[i])
						

		}
				pare
			caso 3: 
				escreva("Operação consultar saldo")
				
				pare
			caso 4:
				escreva("Operação entrada de veículos")
				escreva("\nInforme qual carro deseja adicionar...")
				leia(carroDigitado)	
				escreva("", carroDigitado)	
				para(inteiro i=0; i < 4; i++){
						escreva("\n", i, ") ", veiculos[i])
				}
				pare
			caso 5: 
				escreva("Operação saída de veículos")
				pare
			caso contrario: escreva("operação inválida")
			pare
			}

		}
	}
	funcao menu() {
	
			escreva("\n || escolha uma opcao:                   ||")
			escreva("\n || opção (1) cadastrar veículos         ||")
			escreva("\n || opção (2) listar veículos            ||")
			escreva("\n || opção (3) consultar saldo            ||")
			escreva("\n || opção (4) efetuar entrada de veículos||")
			escreva("\n || opção (5) efetuar saída de veículos  ||")
			escreva("\n || opção (0) saír                       ||")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 845; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {veiculos, 6, 9, 8};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */