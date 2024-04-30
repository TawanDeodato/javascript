// Spread basicamente quebra conjuntos de elementos e devolve elementos para outros elementos

let n1 = [10, 20, 30, 40]
let n2 = [11, 22, 33, 44]
let n3 = [...n1] // Copiando um array para dentro de outro

console.log(`Valores de n1: ${n1}`)
console.log(`Valores de n2: ${n2}`)
console.log(`Valores de n3: ${n3}`)

// Spread em funções:

const soma = (v1, v2, v3) => {
    return v1 + v2 + v3
}

let valores = [3, 5, 7]

console.log(soma(...valores))

// Spread em HTML:

const objs1 = document.getElementsByTagName("div") // Tenho o HTML Collection

console.log(objs1) // Vai retornar erro, então temos que fazer a análise no devtools do goole.

const objs2 = [...document.getElementsByTagName("div")]

console.log(objs2) // Veja no DevTools do google