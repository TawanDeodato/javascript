// Estudo de rest em funções:

function soma(...valores) {
    let tam = valores.length
    let res = 0
    for(let i = 0; i < tam; i++) {
        res += valores[i]
    }
    return res
}

console.log(soma(5, 3, 3, 6, 8, 1))

// Outras formas de usar rest em funções:

function soma(...num) {
    let tamanho = num.length
    let resultado = 0
    for( let v in num) {
        resultado += v
    }
    return resultado
}

console.log(soma(5, 3, 3, 6, 8, 1, 5))