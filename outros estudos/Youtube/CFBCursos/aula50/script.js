// Estudos do método reduce() no JavaScript:

const p_array = document.querySelector("#array")
const btnReduzir = document.querySelector("#btnReduzir")
const res = document.querySelector("#resultado")

const elementos_array = [16, 10, 12, 17, 15, 13, 11, 19]
let ant = []
let atu = []

p_array.innerHTML = `[ ${elementos_array} ]`

btnReduzir.addEventListener("click", (evt) => {
    res.innerHTML = elementos_array.reduce((anterior, atual, pos) => {
        ant.push(anterior)
        atu.push(atual)
        return atual + anterior
    })
    res.innerHTML += "</br> Valor anterior: " + ant + "</br> Valor atual: " + atu
})
