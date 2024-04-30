// Wrapper functions são funções que envolvem valores primitivos à um objeto. Neste exemplo, a palavra reservada 'string' esta envolvendo a string para que o valor vá para a constante 'str1'.

const str1 = String('Essa é uma string.')
// Outra forma de fazer um 'wrapper'
const str2 = new String('Essa é outra string.')

console.log(`str1 = ${str1} \nstr2 = ${str2}`)
console.log(`str1 dividida = ${str1.split('')} \nstr2 dividida = ${str2.split('')}`)

// Criar um número com 'wrapper':

const num1 = Number('1')
const num2 = new Number('2') // Um dado dessa maneira pode ser facilmente acessada no devtools, cuidado com o uso desta sintaxe em um dado que não pode ser revelado como exemplo: Senha.

console.log(`num1 = ${num1} \nnum2 = ${num2}`)
console.log(`num1 com 2 casas decimais = ${num1.toFixed(2)} \nnum2 com 3 casas decimais = ${num2.toFixed(3)}`)

// Cria um boolean com 'wrapper':

const bool1 = Boolean(0) // Boolean com o número '0' vai ser igual a 'false'
const bool2 = new Boolean('') // Boolean vazio vai ser igual a 'false'

console.log(`bool1 = ${bool1} \nbool2 = ${bool2}`)
console.log(`bool1.toString() = ${bool1.toString()} \nbool2.toString() = ${bool2.toString()}`)