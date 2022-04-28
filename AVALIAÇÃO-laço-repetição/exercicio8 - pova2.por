programa
{
	
	funcao inicio() {
		inteiro contador =1, 
			   idade =0,
			   faixa1 =0,
			   faixa2 =0,
			   faixa3 =0,
			   faixa4 =0,
			   faixa5 =0,
			   porcentPrimeira,
			   porcentUltima


			     enquanto(contador <= 3){
			     	escreva("Digite sua idade:")
			     	leia(idade)

			     		se (idade <= 15){
			     			faixa1 += 1
			     		}
			     		se (idade >= 16 e idade <= 30){
			     			faixa2 += 1
			     		}
			     		se (idade >= 31 e idade <= 45){
			     			faixa3 += 1
			     		}
			     		se (idade >= 46 e idade <= 60){
			     			faixa4 += 1
			     		}
			     		se (idade >= 61){
			     			faixa5 += 1
			     		}

			     	 	contador += 1
			     }
			     porcentPrimeira = (faixa1 * 100) / contador
			     porcentUltima = (faixa1 * 100) / contador

			     escreva("\n Faixa até 15 anos ...", faixa1)
			     escreva("\n Faixa  16 a 30 anos ...", faixa2)
			     escreva("\n Faixa  31 a 45 anos ...", faixa3)
			     escreva("\n Faixa 46 a 60 anos ...", faixa4)
			     escreva("\n Faixa acima de 61 anos ...", faixa5)
			     escreva("\n % da primeira faixa", porcentPrimeira)
			     escreva("\n % da ultima faixa", porcentUltima)
			     
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 1145; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */