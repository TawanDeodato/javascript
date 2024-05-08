// Estudos do método some() no JavaScript:

const p_array = document.querySelector("#array")
const btnPesquisar = document.querySelector("#btnPesquisar")
const res = document.querySelector("#resultado")

const elementos_array = [16, 10, 12, 17, 15, 13, 11, 19]

// const elementos_array = ["HTML", "CSS", "JavaScript", "React", "Nodejs", "Java"]

p_array.innerHTML = `[ ${elementos_array} ]`

btnPesquisar.addEventListener("click", (evt) => {
    const ret = elementos_array.some((el, ind) => {
        if (el < 18) {
            res.innerHTML = `Array não conforme na poisção ${ind}` 
        }
        return el >= 18
    })
    if (ret) {
        res.innerHTML = "OK"
    }
})