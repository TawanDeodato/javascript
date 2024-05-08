const p_array = document.querySelector("#array")
const btnPesquisar = document.querySelector("#btnPesquisar")
const res = document.querySelector("#resultado")

const elementos_array = [10, 2, 4, 5, 15, 30, 12, 34, 25, 1]

// const elementos_array = ["HTML", "CSS", "JavaScript", "React", "Nodejs", "Java"]

p_array.innerHTML = `[ ${elementos_array} ]`

btnPesquisar.addEventListener("click", (evt) => {
    const ret = elementos_array.every((el, ind) => {
        if (el < 2) {
            res.innerHTML = `Array não conforme na poisção ${ind}`
        }
        return el >= 2
    })
    if (ret) {
        res.innerHTML = "OK"
    }
})