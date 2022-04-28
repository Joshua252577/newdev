programa
{

	funcao inicio() {
		cadeia operacao =""
		real n1, n2, resultado


			enquanto(operacao != "") {
				escreva("\n Digite opercao: ")
				leia(operacao)
				
					se(operacao == "+"){
						escreva("digite dois numeros: ")
						leia(n1, n2)
						resultado = n1 + n2
						escreva("\n resultado é...", resultado)
					}
					senao se (operacao == "-"){
						escreva("digite dois numeros: ")
						leia(n1, n2)
						resultado = n1 - n2
						escreva("\n resultado é...", resultado)
					}
					senao se (operacao == "/"){
						escreva("digite dois numeros: ")
						leia(n1, n2)
						resultado = n1 / n2
						escreva("\n resultado é...", resultado)
					}
					senao se (operacao == "*"){
						escreva("digite dois numeros: ")
						leia(n1, n2)
						resultado = n1 * n2
						escreva("\n resultado é...", resultado)
					}
					senao se (operacao == "sair"){
						escreva("\n você encerrou o programa!")

					}
			}
	}

}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 107; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */