// Estudos sobre vaidação nativa em javascript (parte 2):

const f_nome = document.querySelector("#f_nome")
const f_nota = document.querySelector("#f_nota")
const f_msg = document.querySelector("#f_msg")

document.querySelector("#btn_validar").addEventListener("click", (evt) => {
    let estadoValidacao = f_nota.validity

    if(estadoValidacao.valueMissing){
        f_nota.setCustomValidity("Coloca a nota aqui seu arrombado burro!")
    } else if(estadoValidacao.rangeOverflow) {
        f_nota.setCustomValidity("Tu é burro caralho? O máximo da nota é 10!")
    } else if(estadoValidacao.rangeUnderflow) {
        f_nota.setCustomValidity("Como que tu vai tirar uma nota menor que 0? Deixa de ser burro!")
    }


    f_nota.reportValidity()
    // f_msg.innerHTML = f_nota.validationMessage
    evt.preventDefault()
})

// Métodos de validação do DOM:
// checkValidity()
// setCustomValidity()

// Propriedade de validação do DOM:
// validity
// validationMessage

// Propriedades de validação
/*
customError: true, se uma mensagem de validação personalizada for definida.
patternMismatch: true, se o valor de um elemento não corresponder ao seu atributo padrão.
rangeOverflow: true, se o valor de um elemento for maior que ser atibuto max. 
rangeUnderflow: true, se o valor de um elemento for menor que ser atibuto max. 
stepMismatch: true, se o valor de um elemento for inválido por seu atributo step.
tooLong: true, se o valor de um elemento exceder seu atributo maxLength.
typeMismatch: true, se o valor de um elemento for inválido por seu atributo type.
valueMissing: true, se um elemento (com um atributo obrigatório) não tiver valor.
valid: true, se o valor de um elemento for inválido.
*/