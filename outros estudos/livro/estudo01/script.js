var num = 1 // {1}
num = 3 //{2}
var price = 1.5 // {3}
var meuNome = 'Tawan' // {4}
var trueValue = true // {5}
var nullvar = null // {6}
var und; // {7}

// Na linha linha {2} atualizei o valor da variável. O JavaScript não tem listas fortemente tipadas, então eu consigo fácilmente iniciar o código com a (var = 1) e logo em seguida essa variável trocar de valor para (var = 3).

// Na linha {5} foi adicionado uma variável do tipo "boolean". Na linha {7} foi adicionado uma variável do tipo undefined.

console.log('num: ' + num);
console.log('price: ' + price);
console.log('meuNome: ' + meuNome);
console.log('trueValue: ' + trueValue);
console.log('nullvar: ' + nullvar);
console.log('und: ' + und);

// Eu utilizei a sintax "console.log('num: " + num);", mas eu poderia trocar o sinal de "+" por uma vírgula.

console.log('typeof num: ', typeof num);
console.log('typeof price: ', typeof price);
console.log('typeof meuNome: ', typeof meuNome)
console.log('typeof trueValue: ', typeof trueValue)
console.log('typeof nullvar: ', typeof nullvar)
console.log('typeof und: ', typeof und)

// O operador "typeof" devolve o tipo da variável ou expressão