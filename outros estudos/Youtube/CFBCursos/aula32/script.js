// Estudos sobre manipulação do DOM com getElementByClassName:

const cursosTodos = [...document.getElementsByClassName("curso")] // Transformando de HTMLcolletction em array.
const cursosC1 = [...document.getElementsByClassName("c1")]
const cursosC2 = [...document.getElementsByClassName("c2")]
const cursoEspecial = document.getElementsByClassName("curso")[3]

console.log(cursosTodos) // Veja pelo console do DevTools
console.log(cursosC1) // Veja pelo console do DevTools
console.log(cursosC2) // Veja pelo console do DevTools
console.log(cursoEspecial)

cursosC1.map((el) => {
    el.classList.add("destaque") // Foi adicionado uma claase destaque das CSS no HTML.
})