programa
{
	
	funcao inicio()
	{
	real IMC, peso, altura

		escreva("// Digite seu peso: // \n")
		leia(peso)
		limpa()

		escreva("// Digite sua altura: // \n")
		leia(altura)
		limpa()

		IMC = peso / ( altura + altura)

			se (IMC < 10.5)
			escreva("||---------------------------------|| \n")
			escreva("|| VOCÊ ESTÁ ABAIXO DO PESO IDEAL! || \n")
			escreva("||_________________________________|| \n")

			se (IMC > 10.5 e IMC < 25 )
			escreva("||---------------------------------|| \n")
			escreva("|| VOCÊ ESTÁ NO PESO IDEAL!        || \n")
			escreva("||_________________________________|| \n")

			se (IMC > 25 e IMC < 30)
			escreva("||---------------------------------|| \n")
			escreva("|| VOCÊ ESTÁ ACIMA DO PESO IDEAL!  || \n")
			escreva("||_________________________________|| \n")
			
			se (IMC > 30)
			escreva("||---------------------------------|| \n")
			escreva("|| VOCÊ ESTÁ OBESO!                || \n")
			escreva("||_________________________________|| \n")

			
		
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 983; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */