programa
{
	
	funcao inicio()
{
		real VlCompra, totalAvista =0.0, totalAPrazo =0.0
		cadeia FPagamento

		  para(inteiro i=0; i < 5; i++){
		  	escreva("\n selecione a forma de pagamento. (v) a vista (p) a prazo \n")
		  	leia(FPagamento)
			escreva("\n insira o valor da compra avista. \n")
			leia(VlCompra)

				se(FPagamento == "v"){
					totalAvista =+ VlCompra
				}
				senao se (FPagamento == "p") {
					totalAPrazo  =+ VlCompra
				}
				senao{
					escreva("erro!")
					limpa()
				}
				escreva("\n o valor total a vista é R$:", totalAvista)
				escreva("\n o valor total a prazo é R$:", totalAPrazo * 1.1)
				escreva("\n o valor total da compra será R$:", totalAvista + (totalAPrazo * 1.1))
		} 
	}

}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 257; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */