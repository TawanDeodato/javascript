// Preencher um array com valores:

const arrPreenchido = new Array(10) // um array com 10 elementos de valor 'undefined'. 

// arrPreenchido.fill(5) // Vai adicionar o valor '5' para todos os índices.
// arrPreenchido.fill(5, 1) // Vai adicionar o valor '5' para todos os índices à partir da casa 1.
arrPreenchido.fill(5, 0, 5) // Vai adicionar o valor '5' para o índice 0 até a casa 5.

debugger

// Ordenando um array:

const arrayOrdenado = [2, 3, 1, 10, 9, 4, 5, 8, 0]

arrayOrdenado.sort((a, b) => a - b)

debugger