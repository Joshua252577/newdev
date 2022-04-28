programa
{
	
	funcao inicio() {
		real TF =0, faturamento =0

		 para(inteiro i=0; i < 5; i++) {
		 	escreva("digite um valor")
		 	leia(faturamento)
		 	TF += faturamento
		 	 
		 }
		 se (TF > 54000) {
		 	escreva("Ele superou em ...", TF - 54000)
		 } senao {
		 	escreva("não superou")
		 }
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 114; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */