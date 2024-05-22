const palco = document.getElementById("palco")
const num_objetos= document.getElementById("num_objetos")
const txt_qtde = document.getElementById("txt_qtde")
const btn_add = document.getElementById("btn_add")
const btn_remover = document.getElementById("btn_remover")
// const = document.getElementById("")
// const = document.getElementById("")
// const = document.getElementById("")

let larguraPalco = palco.offsetWidth 
let alturaPalco = palco.offsetHeight
let bolas = []
let numBola = 0

class Bola {
    constructor() {
        this.size = Math.floor(Math.random() * 15)+10
        // Definindo as cores aleatoriamente 
        this.r = Math.floor(Math.random() * 255)
        this.g = Math.floor(Math.random() * 255)
        this.b = Math.floor(Math.random() * 255)
        // Definindo as posições aleatoriamente
        this.px = Math.floor(Math.random()*(larguraPalco - this.size))
        this.py = Math.floor(Math.random()*(alturaPalco - this.size))
    }

}

window.addEventListener("resize", (e) => {
    larguraPalco = palco.offsetWidth 
    alturaPalco = palco.offsetHeight
})

btn_add.addEventListener("click", (e) => {
    const qtde = txt_qtde.value
    for (let i = 0; i < qtde; i++) {
        // Instanciar novas bolinhas
    } 
})

btn_remover.addEventListener("click", (e) => {
    bolas.map((b) => {
        // Remover as bolinhas
    })
})