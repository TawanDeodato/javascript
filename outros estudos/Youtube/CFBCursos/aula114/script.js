// Estudos de Desestruturação em JavaScript:

// let a, b, c ,d

// ({a, b, c, d} = {a: "Verde", b: "Amarelo", c: 30, d: 2})

let numeros = () => {
    return [10, 20, 30, 40]
}

let [a, b, c, d] = numeros()

console.log(a)
console.log(b)
console.log(c)
console.log(d)