// Os templates literais são um recurso interessante, pois podemos criar strings sem a necessidade de concatenar os valores.

// Por exemplo:

const livro = {
    name: 'Estrutura de dados e algoritimos com JavaScript.'
}
console.log('Você está lendo o' + livro + '.\n e isso é uma nova linha\n e isso também.')

// Podemos melhorar a sintaxe da saída do console.log anterior com o código assim:

console.log(`Você está lendo o ${livro}.,
    e isso é uma nova linha
        e isso também.`)

// Os templates Literais devem estar entre crases(``). Para adicionar um valor de uma variável, basta defini-lo com o sinal de sifrão e com chave (${})

// Os templates Literais também podem ser usados para strings multilinha. Não precisa adicionar '\n'. Basta pressionar o 'enter' no teclado para gerar uma quebra de linha.