// Estudos de estrutura de loop 'while'.

let num = 0
while (num <= 5) {
    console.log(`Contando... ${num}`);
    num++;
}

// podemos também contar usar variáveis de strings para soletrar a palavra completa. Neste exeemplo abaixo, o log tem que exibir as letras separadas, exemplo: "h" , "e", "l", "l", "o".

let str = 'hello'
let cont = 0
while (cont < str.length) {
    console.log(str[cont])
    cont++
} 

// Loop infinito se da quando uma condição nunca se torna verdadeira. Segue o exemplo abaixo:

// let cont = 0
/* while (cont < 10) {
    console.log('cont')
}

coloquei como comentário para não travar rsrs */ 

// O exemplo acima imprime "0" infinitamente porque não foi adicionado um incremento na variável 'cont', portanto, 'cont' vai ser sempre menor do que 10.

// let num = 1
while (num <= 10) {
    console.log(num)
    num += 2;
}
