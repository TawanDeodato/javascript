// Estudos sobre arrays
// As arrays não tem um tamanho fixo, ou seja, você pode alterar o tamanho da array a qualquer momento.
// Nós podemos acessar o tamanho de uma array com a propiedade '.length', exemplo: arr.length

// Criando uma array de forma literal:

let fruta = [] // array vazia
// Ou
let frutas = ['maçã', 'banana'] // array com dois elementos do mesmo estilo (string)

console.log(frutas.length)

// Outra maneira seria usando o operador 'new' que cont´roi um objeto por meio da função contrutora do array

let frutasUsandoNew = new Array('Maçã', 'Banana') // Declarando os elementos com argumentos.

let arrTamanho = new Array(10) // Adicionando o número de posições com argumentos.

console.log(frutasUsandoNew)