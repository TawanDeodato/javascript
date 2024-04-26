// Resumidamente, as funções de seta (arrow functions) são uma simplificação das funções normais.

// Função tradicional:

var circleAreaES5 = function circleArea(r) {
    var PI = 3.14
    var area = PI * (2*r) // PI vezes duas vezez o raio
    return area
}
console.log(circleAreaES5(2))

// Arrow Function 

const circleArea = r => { // {1}
    const PI = 3.14
    const area = PI * (2*r)
    return area
    // Troque o 'var' por 'const' ou 'let', protege melhor os daods dessa forma.
}
console.log(circleArea(2))

// A principal diferença entre as duas funções esta na linha {1}, onde podemos omitir a palavra reservada 'function' usando uma seta (=>).

// Se a função tiver uma única instrução, podemos diminuir o código omitindo a palavra reservada 'return' e as chaves '{}' desta forma:

const circelArea2 = r => 3.14 * (2*r)
console.log(circelArea2(2))

