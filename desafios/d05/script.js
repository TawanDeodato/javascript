let num = document.getElementById('inum')
let lista = document.getElementById('flista')
let res = document.getElementById('res')
let v = []

function isNum(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function clicou() {
    if (isNum(num.value) && !inLista(num.value, v)) {

    } else {
        window.alert('Valor inválido ou não encontrado!')
    }
}