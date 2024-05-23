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
    constructor(arrayBolas, palco) {
        this.size = Math.floor(Math.random()*15)+10
        // Definindo as cores aleatoriamente 
        this.r = Math.floor(Math.random()*255)
        this.g = Math.floor(Math.random()*255)
        this.b = Math.floor(Math.random()*255)
        // Definindo as posições aleatoriamente
        this.px = Math.floor(Math.random()*(larguraPalco - this.size))
        this.py = Math.floor(Math.random()*(alturaPalco - this.size))
        // Definindo velocidades diferentes
        this.velx = Math.floor(Math.random()*2)+0.5
        this.vely = Math.floor(Math.random()*2)+0.5
        // Definindo direções aleatoriamente
        this.dirx = (Math.random()*10) > 5 ? 1 : -1
        this.diry = (Math.random()*10) > 5 ? 1 : -1
        // Definindo o local onde vão sair as bolinhas
        this.palco = palco
        this.arrayBolas = arrayBolas
        // Definindo id diferentes para cada bolinhas
        this.id = Date.now() + "_" + Math.floor(Math.random()*100000000000000)
        this.desenhar()
        // Definindo o controle das bolinhas
        this.controle = setInterval(this.controlar, 10)
        // Relacionando uma bolinha criada com a bolinha do array "bolas"
        this.eu = document.getElementById(this.id)
    }
    minhaPos = () => {

    }

    remover = () => {

    }

    desenhar = () => {

    }

    controlar = () => {

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