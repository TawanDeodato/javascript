// Estudos sobre valor default para parâmetros de funções.

// Você pode já pre-programar os valores de parâmetros de uma função da seguinte forma:

function num(x = 1, y = 2, z = 3) {
    return x+y+z
}
console.log(num(4, 2)) // Exibe 9

// Como não coloquei o valor para o parâmetro 'z', ele terá um valor igual a 3 como default. Deste modo a função ficou, 4 + 2 + 3 = 9.q