// Métodos de ações

// A palavra reservada 'repeat' básicamente copia uma variável e coloca em outra variável.

let stringTransformada;
const umaString = ' Essa é uma string de teste. '

stringTransformada = umaString.repeat();
console.log(stringTransformada);

// A palavra reservada 'concat' básicamente concatena uma string em outra

stringTransformada = umaString.concat(' Essa é uma outra string de teste. ');
console.log(stringTransformada);

// A palavra reservada 'replace' básicamente substitui uma parte da string por outra

stringTransformada = umaString.replace('Essa', 'Isto');
console.log(stringTransformada)

// A palavra reservada 'slice' básicamente fatia uma parte da string

stringTransformada = umaString.slice(0, 5)
console.log(stringTransformada)

// A palavra reservada 'split' básicamente vai criar um array de acordo com a regra que você passar como parâmetro

stringTransformada = umaString.split(' ')
console.log(stringTransformada)

// A palavra reservada 'substring' básicamente vai fazer uma substring na string original

stringTransformada = umaString.substring(0, 5);
console.log(stringTransformada);

//-----------------------------------
stringTransformada = umaString.toLocaleLowerCase(); // Vai transformar tudo em minúsculo
console.log(stringTransformada);

stringTransformada = umaString.toLocaleUpperCase(); // Vai transformar tudo em caixa alta
console.log(stringTransformada);
//-----------------------------------
stringTransformada = umaString.trim(); // Vai cortar todos os espaços das estremidades da string
console.log(stringTransformada)

stringTransformada = umaString.trimStart(); // Vai cortar todos os espaços do começo da string
console.log(stringTransformada);

stringTransformada = umaString.trimEnd(); // Vai corta todos os espaços do final da string
console.log(stringTransformada);
//-----------------------------------