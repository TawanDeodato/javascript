String.prototype.search() // Retorna o índice na string do primerio trecho que satifaz a expressão regular. Do contrário, o valor '-1' será retornado.

// Um objeto contendo uma expressão regular. Se um obejto 'obj' for passado como parâmetro e nã ofor do tipo RedExp, ele será implicidamente convertido para uma RegExp através da instrução new RegExp(obj).

const str1 = "NaN significa 'não é um número1. Infinity contem -Infinity e +Infinity em JavaScript.",
    str2 = "Meu avô tem 65 anos e minha avó tem 63.",
    str3 = "O contrato foi declarado null (nulo) e void (sem efeito)";
console.log(str1.search("número")); // retorna: 24
console.log(str1.search(NaN)); // retorna: 0
console.log(str1.search(Infinity)); // retorna: 33
console.log(str1.search(+Infinity)); // Vai retornar o mesmo 33 porque ele ignora o valor '+'
console.log(str1.search(-Infinity)); // A mesma coisa do exemplo ácima.
console.log(str2.search(65)); // retorna: 49
console.log(str2.search(+65)); // Vai retornar o mesmo 49 porque ele ignora o valor '+'
console.log(str3.search(null)); // retorna: 25

// Métodos de comparação e verificação
const stringDeTeste = "Essa é uma string de teste de canal do Paulo Raoni braziliandev!"

console.log( stringDeTeste.startsWith("Essa"))
console.log( stringDeTeste.endsWith("uma"))
console.log( stringDeTeste.includes("braziliandev"))
console.log( stringDeTeste.indexOf("é"))
console.log( stringDeTeste.lastIndexOf("!"))
console.log( stringDeTeste.length)
console.log( stringDeTeste.valueOf())

console.log( stringDeTeste.charCodeAt(0))
console.log(String.fromCharCode(69))