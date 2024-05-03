// Estudos sobre manipulação do DOM com querySelector:

const divTodas = [...document.getElementsByTagName("div")]
const cursoTodos = [...document.getElementsByClassName("curso")] // Transformando de HTMLcolletction em array.
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsById("c1")

const query_div = document.querySelector("div")
// const query_divTodas = [...document.querySelectorAll("div")] // Retorna somente divs
const query_divTodas = [...document.querySelectorAll("div, p")] // Retrona divs e parágrafos
console.log(query_div) // Ele retorna a primeria div que encontrar
console.log(query_divTodas) // Ele retorna todas as divs

const query_cursoTodos = [...querySelectorAll(".curso")] // Retorna todos os elementos que usam a classe ".curso"
const query_cursosC1 = [...document.querySelectorAll("c1")]
const query_cursosC2 = [...document.querySelectorAll("c2")]
const query_cursoEspecial = document.querySelector("#c1")

console.log(query_cursosC1)
console.log(query_cursosC2)

// console.log(divTodas)
// console.log(cursoTodos) // Veja pelo console do DevTools
// console.log(cursosC1) // Veja pelo console do DevTools
// console.log(cursosC2) // Veja pelo console do DevTools
// console.log(cursoEspecial)