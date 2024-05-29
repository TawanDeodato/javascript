// Estudos sobre LocalStorage em javascript:

const f_texto = document.querySelector("#f_texto")
const p_texto = document.querySelector("#p_texto")
const btn_texto = document.querySelector("#btn_texto")

btn_texto.addEventListener("click", (evt) => {

})

let num = 10
let curso = "JavaScript"

// window.localStorage.setItem("numero", num)
localStorage.setItem("nome", "Tawan")
localStorage.setItem("canal", "CFB Cursos")
localStorage.setItem("curso", curso)

alert(localStorage.getItem("nome"))
alert(localStorage.getItem("canal"))
alert(localStorage.getItem("curso"))

// localStorage.clear() // Para limpar todas as chaves do armazenamento