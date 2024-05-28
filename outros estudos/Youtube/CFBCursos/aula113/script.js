// Estudos sobre a propiedade acessKey em JavaScript:

const q1 = document.getElementById("q1")
const q2 = document.getElementById("q2")
const posx = document.getElementById("posx")
const posy = document.getElementById("posy")
const altura = document.getElementById("altura")
const largura = document.getElementById("largura")

q1.accessKey = "b"
q2.accessKey = "n"

const info = (el) => {
    let DOMrect_q = el.getBoundingClientRect()
    posx.innerHTML = `posx: ${DOMrect_q.x}`
    posy.innerHTML = `posy: ${DOMrect_q.y}`
    altura.innerHTML = `altura: ${DOMrect_q.height}`
    largura.innerHTML = `largura: ${DOMrect_q.width}`
}

q1.addEventListener("click", (evt) => {
    info(evt.target)
})
q2.addEventListener("click", (evt) => {
    info(evt.target)
})