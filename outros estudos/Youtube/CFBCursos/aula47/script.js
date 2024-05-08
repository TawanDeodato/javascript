const p_array = document.querySelector("#array")
const txt_pesquisar = document.querySelector("#txt_pesquisar")
const btnPesquisar = document.querySelector("#btnPesquisar")
const res = document.querySelector("#resultado")

// const elementos_array = [10, 2, 4, 5, 15, 30, 12, 34, 25, 1]

const elementos_array = ["HTML", "CSS", "JavaScript", "React", "Nodejs", "Java"]

p_array.innerHTML = `[ ${elementos_array} ]`

btnPesquisar.addEventListener("click", (evt) => {
    res.innerHTML = "Valor não encontrado."
    elementos_array.find((el, ind) => {
        if (el.toUpperCase() == txt_pesquisar.value.toUpperCase()){
            res.innerHTML = `Valor pesquisado: ${el} na posição ${ind}`
        }
    })
})