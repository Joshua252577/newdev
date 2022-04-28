programa
{
	
		funcao inicio(){
	
	real H, peso
	inteiro opcao
	
	escreva("escolha o peso ideal:  \n")
	escreva("escolha seu sexo:      \n")
	escreva(" 1 Homem               \n")
	escreva(" 2 mulher              \n")
	leia(opcao)
	

		escolha(opcao)
		{
			caso 1:
			{
				
					escreva("Digite sua altura: \n")
					leia(H)
				

					peso = (72.7 * H) -58
					escreva("seu peso ideal é \n")
					escreva("." , peso, " \n")
					pare
			}
		
			 caso 2:
			 {
			
					escreva("Digite sua altura: \n")
					leia(H)
			

					peso = (62.1 * H) -44.7
					escreva("seu peso ideal é \n")
					escreva("." , peso, " \n")
					pare
			 }
		}
		}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 542; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */