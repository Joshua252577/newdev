programa
{
	
	funcao inicio()
	{
		inteiro vetor[4]
		inteiro matriz[2][2]
		// posicionando um numero na matriz
		matriz[0][1] = 10
		matriz[1][1] = 5
		matriz[0][0] = 1
		matriz[1][0] = 2
		// aqui estamos percorrendo as linhas e colunas
		// no primeiro laço de repetição percorremos as linhas
		// no segundo laço de repetição percorremos as colunas
		// lembrar sempre de alterar a vareavel incrementar dos dois
		// dois laços de repetição
		para(inteiro linha=0; linha < 2; linha++){

			// Percorre colunas
			para(inteiro coluna=0; coluna < 2; coluna++){
				escreva(", ", matriz[linha][coluna])
			}

		}
		cadeia alunos[] = {
			"Bruno",
			"João",
			"Maria",
			"josé"
		}
		real notas[3][3] = {
			{7.0,7.0,7.0},			
			{6.5,8.5,8.7},
			{7.8,5.7,5.9}
		}
		real medias[3]
		
			para(inteiro linhas=0; linhas < 3; linhas++){
				real soma=0.0
				para(inteiro i=0; i < 3; i++){
					
					soma+= notas[linhas][i]
				}			
					medias[linhas] = soma/3
			}
			inteiro numeros[2][2]
			para(inteiro linhas=0; linhas < 2; linhas++){
				
				para(inteiro colunas=0; colunas < 2; colunas++){
					escreva("Digite um numero: ")
					leia(numeros[linhas][linhas])
						
				}

			}
		}
	}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 35; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = {numeros, 47, 11, 7};
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */