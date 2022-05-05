programa
{
//JOGO DA VELHA
	funcao inicio() {
	cadeia jogo[3][3]
	inteiro opcao =0, linha, coluna, player =1, venceu =0, jogadas =0
//OPCAO SE DESEJA JOGAR OU NÃO	
	escreva("\nBEM VINDO AO JOGO MAIS DIFÍCIL DA SUA VIDA! ")
	escreva("\nDIGITE (1) PARA INICIAR ou (2) PARA SAIR: 	")
	leia(opcao)
	 	se(opcao == 1){
	 	escreva("\nVAMOS COMEÇAR!\n")
			para(inteiro linhas = 0; linhas < 3; linhas++){
				para(inteiro colunas = 0; colunas < 3; colunas++)
					jogo[linhas][colunas] = " "
			}
		}senao{
			escreva("PERDEDOR!")
		}
		faca{		
	// IMPRESSÃO DO JOGO
				escreva("\n\n 0    1   2\n\n")
				para(inteiro linhas=0; linhas < 3; linhas++){
					para(inteiro colunas=0; colunas < 3; colunas++){
						escreva(jogo[linhas][colunas])
						se(colunas<2){
							escreva("  | ")
						}
						se (colunas == 2){
							escreva("  ", linhas)
						
						}
					}
					se(linhas<2){
						escreva("\n------------")
						escreva("\n")
					}		
				}
	// LER AS LINHAS E AS COLUNAS QUE O PLAYER QUER JOGAR
				faca{
					faca{
						escreva("\nPLAYER ", player, " DIGITE LINHA E COLUNA DA  POSIÇÃO DESEJADA: ")
						leia(linha, coluna)
					}enquanto(linha<0 ou linha>2 ou coluna<0 ou coluna>2)
				}enquanto(jogo[linha][coluna] != " ")
				
	// SALVAR MOVIMENTOS
				se(player == 1){
					jogo[linha][coluna] = "0"
					player++
				}senao{
					jogo[linha][coluna] = "X"
					player = 1
				}
				jogadas++
				
	// VERIFICARVENCEDOR POR LINHAS
				para(linha = 0; linha < 3; linha++){
					se(jogo[linha][0] == "0" e jogo[linha][1] == "0" e jogo[linha][2] == "0"){
					venceu = 1
					}
				}
				para(linha = 0; linha < 3; linha++){
					se(jogo[linha][0] == "X" e jogo[linha][1] == "X" e jogo[linha][2] == "X"){
					venceu = 2
					}
				}
	// VERIFICAR VENCEDOR POR COLUNAS
							para(coluna = 0; coluna < 3; coluna++){
					se(jogo[0][coluna] == "0" e jogo[1][coluna] == "0" e jogo[2][coluna] == "0"){
					venceu = 1
					}
				}
				para(coluna = 0; coluna < 3; coluna++){
					se(jogo[0][coluna] == "X" e jogo[1][coluna] == "X" e jogo[2][coluna] == "X"){
					venceu = 2
					}
				}
	// VERIFICAR VENCEDOR POR DIAGONAL PRINCIPAL
				se(jogo[0][0] == "0" e jogo[1][1] == "0" e jogo[2][2] == "0"){
					venceu = 1
				}
				se(jogo[0][0] == "X" e jogo[1][1] == "X" e jogo[2][2] == "X"){
					venceu = 2
				}
	// VERIFICAR VENCEDOR POR DIAGONAL SECUNDÁRIA
				se(jogo[0][2] == "0" e jogo[1][1] == "0" e jogo[2][0] == "0"){
					venceu = 1
				}
				se(jogo[0][2] == "X" e jogo[1][1] == "X" e jogo[2][0] == "X"){
					venceu = 2
				}
		}enquanto(venceu == 0 e jogadas < 9)

				se(venceu != 0){
					escreva("\nPARABÉNS PLAYER", player, ". VOCÊ VENCEU!\n\n")
				}
				
					escreva("\n\n 0    1   2\n\n")
			para(inteiro linhas=0; linhas < 3; linhas++){
				para(inteiro colunas=0; colunas < 3; colunas++){
					escreva(jogo[linhas][colunas])
					se(colunas<2){
						escreva("  | ")
					}
					se (colunas == 2){
						escreva("  ", linhas)
					
					}
				}
				se(linhas<2){
					escreva("\n------------")
					escreva("\n")
				}
	}
}
}
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2325; 
 * @DOBRAMENTO-CODIGO = [10, 16, 33, 22, 50, 63, 74];
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */