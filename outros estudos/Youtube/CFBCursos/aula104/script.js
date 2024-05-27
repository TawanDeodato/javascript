let nome = new String("Tawan estuda JavaScript") 

console.log(nome.startsWith("T"))
console.log(nome.endsWith("JavaScript"))

// console.log(nome.includes("estuda")) // true
console.log(nome.includes("estudou")) // false

console.log(nome.repeat(3)) // Repete a string

// nome = nome.repeat(3)
// console.log(nome)

console.log(nome.charCodeAt(0))
console.log(nome.charCodeAt(1))
console.log(nome.charCodeAt(2))
console.log(nome.charCodeAt(3))
console.log(nome.charCodeAt(4))

console.log(String.fromCodePoint(84, 97, 119, 97, 110))
// console.log(String.fromCodePoint(97))
// console.log(String.fromCodePoint(119))

let nome_ts = "Tawan"

console.log(`Nome: ${nome_ts}`)