// Abaixo ta escrito a syntax básica de uma função simples em JavaScript.

function ola() {
    console.log('Ola, Mundo!')
}

// Para a função aparecer no console, precisamos chamar a função apenas digitando o nome da função desta forma:

ola()

/* Também podemos passar parâmetros para uma função. Parâmetros resumidamente são tudo que colocamos dentor dos parenteses "()" em uma função. Nós podemos modificar esses parâmetros quando vamos chamar uma função. */

function saida(texto) {
    console.log(texto)
}

saida('Olá, Mundo!')

// Podemos também fazer contas com funções, assim:

function soma(num1, num2) {
    return num1 + num2
}
var resultado = soma(1, 2)
saida(resultado)

// Utilizei some a adição de dois parâmetros, mas você pode usar outros operadores matemáticos. Vai da sua criatividade.
