// Estudos sobre função de primeria classe.

// Uma função de primeria classe são funções que podem ser passadas como argumento para outras funções, ser retornada por outra função e pode ser atribuída como um valor à uma variável.

//-------- UTILIZE O DEBUGGER PARA PODER ANALISAR O CÓDIGO COM MAIS PRECISÃO. --------//
const foo = function() {
    console.log('foobar.')
}

foo()

// Como se passa uma função como argumento:

function dizOla() {
    return "Olá, "
}
function apresentacao(funcaoMensagemOla, nome) {
    console.log(funcaoMensagemOla() + nome)
}

apresentacao(dizOla, "JavaScript!")

// Como fazer uma função retornar outra função:

function printaBrDev() {
    return function() {
        console.log("BrDev!")
    }
}

// Chamando a função:

const myFunc = printaBrDev()
myFunc()

// Uso de parêntese duplo:

//printaBrDev()()