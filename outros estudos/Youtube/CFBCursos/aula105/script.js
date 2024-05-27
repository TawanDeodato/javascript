// Estudos sobre RegExp em JavaScript (parte 2):

let nome = new String("Tawaaaaaaaan estudaaaaaaaa JavaScript 1985")
let emial = "tawan@tawan.com.br"
let numeros = "1, 10, 100, 1000"

console.log(nome.match(/[a-m | 0-7]/ig))

// Metacaracteres
console.log(nome.match(/\d/ig))
console.log(nome.match(/\s/ig))
console.log(nome.match(/\bJ/ig))

//Quantificadores
console.log(nome.match(/a+/ig))
console.log(nome.match(/wa+/ig))
console.log(numeros.match(/10/ig))
console.log(numeros.match(/10+/ig))
console.log(numeros.match(/10*/ig))
console.log(numeros.match(/10?/ig))