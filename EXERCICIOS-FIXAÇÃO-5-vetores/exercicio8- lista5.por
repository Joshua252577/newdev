programa
{
	
	funcao inicio() {
		escreva("")
		inteiro numerosPares[10], numerosImpares[10], numDigitado =0, contPar =0, contImpar =0

		enquanto (contPar + contImpar < 10){
			escreva("Digite um numero: \n")
			leia(numDigitado)

				se (numDigitado % 2 == 0) {
				numerosPares[contPar] = numDigitado
				contPar++
			     } senao {
			     	numerosImpares[contImpar] = numDigitado
			     	contImpar++
			     }
		}
		listaPares(numerosPares, contPar)
		listaImpares(numerosImpares, contImpar)
	}
	funcao listaPares(inteiro numerosPares[], inteiro contPar) {
		inteiro copia =0
		para (inteiro j=0; j < contPar; j++){
				// []
			para (inteiro i=0; i < contPar - 1; i++){
				se (numerosPares[i] > numerosPares[i+1]) {
					copia = numerosPares[i]
					numerosPares[i] = numerosPares[i+1]
					numerosPares[i+1] = copia
				
				} 
			}
		}
		para(inteiro i=0; i < 10; i++){
			escreva("|", numerosPares[i])
		}
	}
	
	funcao listaImpares (inteiro numerosImpares[], inteiro contImpar) {
		inteiro copia =0
		para(inteiro i=0; i < contImpar; i++){
			para (inteiro j=0; j < contImpar - 1; j++){
				se (numerosImpares[i] > numerosImpares[i+1]){
				copia = numerosImpares[i]
				numerosImpares[i] = numerosImpares[i+1]
				numerosImpares[i+1] = copia
				}
			}
		}
			para(inteiro i=0; i < contImpar; i++){
				escreva("|", numerosImpares[i])
			}
	}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 94; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numerosPares, 6, 10, 12}-{numerosImpares, 6, 28, 14};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */