// Estudos sobre relações do DOM no JavaScript:

const caixa1 = document.querySelector("#caixa1")
const btn_c = [...document.querySelectorAll(".curso")]

// console.log(caixa1.lastElementChild)
// console.log(document.getRootNode())
// console.log(caixa1.ownerDocument)

console.log(caixa1.hasChildNodes())
console.log(btn_c[0].hasChildNodes())
console.log(btn_c[0].childNodes)

console.log(caixa1.children.length > 0 ? "Possui filhos" : "Não possui filhos")

caixa1.firstElementChild.innerHTML = "Esse texto foi modificado"
caixa1.children[3].innerHTML = "Esse texto também foi modificado"