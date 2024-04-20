let num = document.getElementById('inum')
let lista = document.getElementById('tlista')
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

function verificar() {
    if (isNum(num.value) && !inLista(num.value, v)) {
    v.push(Number(num.value))
    let item = document.createElement('option')
    item.text = `Valor ${num.value} adicionado.`
    lista.appendChild(item)
    res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou não encontrado!')
    }
    num.value = ''
    num.focus()
}

function gerar() {
    if (v.length == 0) {
    window.alert('Adicione um valor para prosseguir!')
    } else {
        let tot = v.length
        let maior = v[0]
        let menor = v[0]
        let soma = 0
        let media = 0
        for (let pos in v) {
            soma += v[pos]
            if (maior < v[pos])
            maior = v[pos]
            if (menor > v[pos])
            menor = v[pos]
        }
        media = soma/tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo temos: ${tot} números cadastrados.</p>`
        res.innerHTML += `<p>O maior número da lista foi: ${maior}.</p>`
        res.innerHTML += `<p>O menor número da lista foi: ${menor}.</p>`
        res.innerHTML += `<p>A soma entre os números é: ${soma}.</p>`
        res.innerHTML += `<p>A média dos números é: ${media}.</p>`
    }
}
