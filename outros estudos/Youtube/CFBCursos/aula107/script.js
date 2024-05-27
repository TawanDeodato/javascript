const carro = document.getElementById("carro")
const btn_esquerda = document.getElementById("btn_esquerda")
const btn_direita = document.getElementById("btn_direita")

const init = () => {
    carro.style = "position:relative;left:0px" 
}

// window.addEventListener("load", init())
window.onload = init

btn_esquerda.addEventListener("click", (evt) => {
    carro.style.left = parseInt(carro.style.left) - 5 + "px"
})

btn_direita.addEventListener("click", () => {
    let pos = parseInt(carro.style.left)
    pos += 5
    carro.style = `position:relative;left:${pos}px`
})

