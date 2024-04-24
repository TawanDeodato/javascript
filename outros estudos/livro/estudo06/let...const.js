// Estudos sobre let e const
// No JavaScript, temos a declaração de variável 'var', mas também podemos utilizar a syntax 'let' para declarar uma varável.

let framework = 'angular' // Vai exibir o elemento no log
//let framework = 'react' // vai dar erro no log
console.log(framework)

// Não podemos mudar mudar no elemento de uma variável dessa fomra, o javascript não permite.

// O mesmo erro ocorre quando tentamos mudar uma 'const' dessa forma:

const pi = 3.14
//pi = 3.10
console.log(pi) 

// Vamos analisar outro exemplos 'const'. Declaramos um objeto como 'const'

const jsFramework = {
    name: 'Angular'
};

// Vamos tentar altera o nome da variável 'jsFramework'

jsFramework.name = 'React';

// Se tentamos executar esse código, ele vai funcionar. Para tipos que não sejam objetos, como número, booleano ou até mesmo string, isso significa que não podemos modificar os valores das variáveis. Com o 'const', nós podemos modificar os valores das propriedades de dentro do objeto, mas a variável em si, não pode ser modificada.

// Vamos tentar modificar uma variável que está dentro de um objeto:

const jsFramework = {
    name: 'Vue'
}
console.log(jsFramework)

// Ele vai dar erro!!