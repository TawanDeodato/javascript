// Funções em JavaScript

// Função simples:

function nome() {
    console.log('Essa é uma função')
}

// Misturando com loops:

for(let i = 0; i < 10; i++){
    nome()
}

// Soma simples com funções:

function soma(){
    let n1 = 4
    let n2 = 9
    let soma = n1 + n2
    console.log(soma)
}

soma()

// Funções no DOM:

function clicou(){
    let d1 = document.getElementById("d1")
    let d2 = document.getElementById("d2")
    let d3 = document.getElementById("d3")
    d1.innerHTML = "Mudou o texto 1"
    d2.innerHTML = "Mudou o texto 2"
    d3.innerHTML = "Mudou o texto 3"
}