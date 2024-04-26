// Saiba mais sobre arrays aqui = https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array

// Métodos comuns de criar um Array

const meuArrayLiteral = [1, 2, 3] // Forma literal
const meuArrayContructorInstance = new Array(1, 2, 3)
const meuArrayConstructorCall = Array(1, 2, 3) // Se colocar apenas um número entre parênteses, o Array vai colocar o valor como tamanho do Array. Exemplo: Array(10) <- o array vai ter 10 elementos.
const meuArrayFrom = Array.from(meuArrayLiteral)
const meuArraySpread = [...meuArrayFrom]

// Alguns métodos mais utilizados para Array

//Inserir e remover elementos das extremidades:

const arr = [1]
arr.push(2) // Insere o elemento atrás do que já está no Array: [1, 2]
arr.unshift(3) // Insere o elemento na frente do que já está no Array: [3, 1, 2]
arr.shift() // Remove o primeiro elemento do Array
arr.pop() // Remove o último valor do Array
