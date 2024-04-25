// Exemplo de 'bind()'
//'use strict' // Aponta pra um objeto 'undefined' no console
function thisBindExemplo() {
    console.log(this)
}

const obj = {exemplo: "exemplo"}

thisBindExemplo = thisBindExemplo.bind(obj) // O 'this' se torna a constante 'obj' no console

// 'call()' e 'apply()' tem uma sintaxe idêntica. A diferença é que 'call()' aceita uma lista de argumentos, enquanto 'apply()' aceita um array de argumentos.

// call()
// O método 'call()' invoca uma função com um dado valor 'this' e argumentos passados individualmente.

const obj1 = {exemplo1: "exemplo1", mostraThis: function thisCallExemplo(){
    console.log(this)
}}

obj1.mostraThis()

const obj2 = {exemplo2: "exemplo2"}

obj1.mostraThis.call(obj2)

// apply()
// O método 'apply()' chama uma função com um dado valor 'this' e argumentos providos como uma array (ou um objeto parecido com uma array).

const obj3 = {exemplo1: "exemplo1", mostraThis: function thisCallExemplo(){
    console.log(this)
}}

obj3.mostraThis()

const obj4 = {exemplo2: "exemplo2"}

obj1.mostraThis.apply(obj4)

// call() aceita lista de argumentos.
// apply() aceita array de argumentos.