// Podemos usar o 'if' se quisermos usar um bloco com uma condição vverdadeira 'true'.
// O uso o 'else' é no caso da mesma condição der o resultado 'false'.

var num = 0
if (num === 1) {
    console.log('Este número é igual a 1.')
} else {
    console.log (`Este número não é igual a 1. O valor real do número é: ${num}.`)
}

// Também podemos reduzir essa condição da seguinte forma: 

(num === 1) ? num-- : num++;

/* (num === 1) <- Início da condição.

? <- perguntando se a condição é verdadeira ou false. 

num--  <- resultado se for 'true'.

: <- separação entre as duas condições. 

num++; <- resultado se for 'false'. */

// se tivermos varias condiçoes, podemos usar o if...else diversas vezes para executar o s blocos de códigos diferentes.

var mes = 5
if (mes === 1) {
    console.log('Janeiro')
} else if (mes === 2) {
    console.log('Fevereiro')
} else if (mes === 3) {
    console.log('Março')
} else if (mes === 4) {
    console.log('Abril')
} else if (mes === 5) {
    console.log('Maio')
} else {
    console.log('O mês selecionado não faz parte da lista.')
}

// encerrando os if e else, entramos agora com o switch. Podemos usar o switch da mesma maneira que o exemplo de cima, porém, de uma forma menor e mais agradável aos olhos.

// var mes = 5;
switch(mes) {
    case 1:
        console.log('Janeiro')
        break // Lembrando de usar o 'break' para todos os fim de casos.
    case 2:
        console.log('Fevereiro')
        break
    case 3:
        console.log('Março')
        break
    case 4:
        console.log('Abril')
        break
    case 5:
        console.log('Maio')
        break
    default:
        console.log('O mês selecionado não faz parte da lista.')
        // No ultimo caso 'default' não é necesário usar o 'break', mas você pode usar se achar melhor.
}