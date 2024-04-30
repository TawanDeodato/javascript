// Deletando elementos de qualquer posição de um array:

const arrRemoveAnyPoint = [1, 2, 5, 3];

arrRemoveAnyPoint.slice(2, 1)

debugger

// No debugger você consegue ver que foi removido o valor '5' do array. Como selecionar o elemento do array??

// Com a palavra reservada 'slice', você tem que colocar o valor da posição do elemento dentro do array e com a separação da vírgula, você coloca quantos índices você quer remover.

/*
0: 1
1: 1
2: 5
3: 3

Desta forma entre parênteses, o número '2' significa que eu escolhi o índice '2' do meu array e em seguida eu coloco quantos índices eu quero remover: slice( casa do array, quantos elementos para remover após esse índice ).*/