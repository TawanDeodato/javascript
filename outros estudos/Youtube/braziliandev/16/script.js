// Estudos de método de strings

// ------------------ANALISE TUDO COM DEBUGGER PARA UMA MAIOR PRECISÃ0------------------//

// Método de verificação e verificação

String.prototype.match(); // retorna array
/* Um obejto de expressão regular. Se regexp não for uma RegExp, o mesmo será convertido para uma nova REdExp usando new RegExp(regexp).

se você não fornecer nenhum parâmetro ao usar o método match(), você obterá ujm Array com uma string vazia: [""]. */

const str = "Para maiores informações, veja o Cápitulo 3.4.5.1";
const re = /(capítulo \d+(\.d)*)/i;
const found = str.match(re);
console.log(found);

const str1 = "NaN significa 'não é um número1. Infinity contem -Infinity e +Infinity em JavaScript.",
    str2 = "Meu avô tem 65 anos e minha avó tem 63.",
    str3 = "O contrato foi declarado null (nulo) e void (sem efeito)";
console.log(str1.match("número")); // "número" é um string. retorna: ["número"]
console.log(str1.match(NaN)); // O tipo NaN é um número. retorna: ["NaN"]
console.log(str1.match(Infinity)); // O tipo Infinity é um número. Retorna: ["Infinity"]
console.log(str1.match(+Infinity)); // Retorna: ["+Infinity"]
console.log(str1.match(-Infinity)); // Retorna: ["-Infinity"]
console.log(str2.match(65)); //Retorna: ["65"]
console.log(str2.match(+65)); // Um número com sinal de positivo. Retorna: ["+65"]
console.log(str3.match(null)); // Retorna: [nul]