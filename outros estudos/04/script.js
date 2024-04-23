// Estudos sobre as estruturas de repetição "for".

// esse exemplo acima é como se fosse um 'while' comum.
/* let i = 0
   while (i < 10) {
        console.log(i)
        i++
   } */

for(let i = 0; i < 10; i++)
 console.log(i) // no caso de você usar apneas uma linha de codigo para o 'for', não é necessário o    
                   // uso das chaves "{}"

for (i = 100; i <= 200; i += 2)
   console.log(i)

// O exemplo acima mostra uma contagem de 100 à 200 pulando de 2 em 2.

for (i = 5; i <= 50; i++) {
    if ((i % 5 == 0) && (i % 3 == 0)) {
        console.log(i)
    }
}

// O exemplo acima ira mostrar como resultado apenas os números que são divisiveis por 5 *e* por 3 com o resultado da divisão igual a 0.

