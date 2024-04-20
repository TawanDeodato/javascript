let num1 = document.getElementById('n1')
let num2 = document.getElementById('n2')

let res = document.getElementById('res')

function verificar() {
    let n1 = Number(num1.value)
    let n2 = Number(num2.value)
    let soma = n1 + n2
    res.innerHTML = `A soma entre os dois valores foi de: ${soma}`
}