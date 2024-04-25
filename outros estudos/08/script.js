// Estudos sobre 'this'

// Chamar o 'this' diferentemente no console nos traz o objeto global do contexto em que o JavaScript está executando.

// O 'this' no devtools do chrome nos traz o objeto 'window'. No node nos traz o objeto 'global'

console.log(this.document === document)

// Em navegador web, o objeto 'window' é também o objeto global:

console.log(this === window) // True

this.a = 37
console.log(window.a) // 37

// Contexto de criação de objeto ERRADO

const arrowFunctionThis = {
    prop: 150,
    arrowF: () => {console.log(this)}
}

// Contexto de criação de objeto CORRETO

const obj1 = {
    exemplo1: "exemplo1",
    mostraThis: function() {
        const f = (() => this)()
        console.log(f)
    }
}

// Todos esses códigos tem que ser usados no devtools do google.