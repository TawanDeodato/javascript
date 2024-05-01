// Estudos sobre arrow function:

const f = (v1, v2) => {
    let soma = v1 + v2
    return soma
}

console.log(f(2, 3))

// Quando tem apenas um parâmetro para ser adicionado, não é necessário o uso dos parênteses "()"

const nome = n => {return n}

console.log(nome("Tawan"))

// E também não precisa utilizar o return:

const add = n => n + 10
console.log(add(10))