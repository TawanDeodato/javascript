// Vamos falar agora sobre laços. existe 3 maneiras de fazer laços no JavaScript.
// No primeiro exemplo eu estou utilizando o laço 'while'.

var i = 0
while (i < 10) {
    console.log(i)
    i++
}

/* Primeiro adicionei uma variável 'i' e logo em seguida já adicionei a condição 'while'. O bloco de códigos 
só será executado, caso a condição seja verdaderia, ou seja, para a condição ser verdaderia, a variável 
'i' tem que ter o valor menor que 10. */

//------------------------------------------------------------------------------------------------------//

/* O laço do...while funciona de uma forma semelhante com o laço de cima. A diferença é que o laço while,
a condição é avaliada antes do bloco de código, enquanto no do...while, a condição é avaliada depois do
bloco de código ser executado. */

var i = 0
do {
    console.log(i)
    i++
} while (i < 10)

//-------------------------------------------------------------------------------------------------------//

/* E por último nós temos o laço 'for'. Ele é como se fosse uma abreviação dos laços acima. A estrutura do 'for' é igual ao do C e do Java. Começa com uma aplicação de variável (geralmente númerica); em seguida, a variável é comparada com outro valor e, por fim, o valor numérico é incrementado ou decrementado. */

for (i = 0; i < 10; i++) {
    console.log(i)
}