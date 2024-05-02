// Estudos sobre manipulação do DOM com getElementById:

// Veja todas as modificações no console do DevTools.

const dc1 = document.getElementById("c1")
const dc2 = document.getElementById("c2")
const dc3 = document.getElementById("c3")
const dc4 = document.getElementById("c4")
const dc5 = document.getElementById("c5")
// console.log(dc1)
// console.log(dc1.id)
// console.log(dc1.innerHTML)
// dc1.innerHTML = "Esse texto foi modificado."

const arrayElementos = [dc1, dc2, dc3, dc4, dc5]

// for(d of arrayElementos)
//     d.innerHTML = "Esse texto foi modificado."

arrayElementos.map( (e) => {
    e.innerHTML = "Esse texto foi modificado."
    console.log(e) 
})