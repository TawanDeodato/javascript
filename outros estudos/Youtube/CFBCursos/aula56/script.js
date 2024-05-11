// Estudos sobre Templates de Strings em JavaScript: 

const caixa = document.querySelector("#caixa")

const cursos = "JavaScript"
const canal = "CFB Cursos"
// const frase = "Este é o curso de " + cursos + "do canal" + canal // Método tradicional 

const frase = `Este é o curso de ${cursos} do canal ${canal}`

caixa.innerHTML = frase