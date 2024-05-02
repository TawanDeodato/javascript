// Estudos sobre o método 'MAP' em JavaScript

// Forma 1 de manipulação de DOM com método 'MAP'

// let el = document.getElementsByTagName("div")
// el = [...el]
// console.log(el) // Veja o log pelo DevTools
// el.map((e, i) => {
//     e.innerHTML = "Esse texto foi modificado."
// })

// Forma 2 de manipulação do DOM com método 'MAP'

// const el = document.getElementsByTagName("div")
// const val = Array.prototype.map.call(el, ({innerHMTL}) => innerHMTL)
// console.log(val)

// Transformando string em number com método 'MAP'

const converterInt = (e) => parseInt(e)
const dobrar = (e) => e*2
let num = ['1', '2', '3', '4'].map(converterInt)
console.log(num)




// const cursos= ['HTML', 'CSS', 'JavaScript', 'PHP', "React"]
// let c = cursos.map((el,i) => {
//     return el
// })

// console.log(c)