programa
{
	
	funcao inicio()
	{
		inteiro vlcompra, vlpagamento, troco
		
		escreva("insira o valor da compra: \n")
		leia(vlcompra)

		escreva("insira o valor do pagamento: \n")
		leia(vlpagamento)

		troco = vlpagamento  - vlcompra

			se (vlpagamento > vlcompra)
			escreva("seu troco é R$:", troco)

			senao
				escreva("saldo negado! \n")
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 76; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */