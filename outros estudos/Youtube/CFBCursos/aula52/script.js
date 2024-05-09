// Estudos de arrays no JavaScrip:

const caixa = document.querySelector("#caixa")

let cores = ["azul", "verde", "Amarelo"]
let cursos = ["HTML", "CSS", "JavaScript", cores]

// cursos[0] = "Este texo foi modificado"

// cursos.push("C++")
// cursos.push("Python") // Adicona elementos do array 
// cursos.pop() // Remove o último elemento do array
// cursos.unshift("Java") // Adiciona elementos no inicio do array
// cursos.shift() // Remove elementos no inicio do array



cursos.map((el) => {
    let p = document.createElement("p")
    p.innerHTML = el
    caixa.appendChild(p)
})