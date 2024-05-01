// Estudos sobre Funções Geradoras em JavaScript:

// Base da função operadora:

function* cores() {
    yield 'Vermelho'
    yield 'Verde'
    yield 'Amarelo'
}
/*
let itc = cores()

console.log(itc.next().value)
console.log(itc.next().value)
console.log(itc.next().value) */

// Complicando a função:

function* perguntas() {
    const nome = yield 'Qual o seu nome?'
    const esporte = yield 'Qual o seu esporte favorito?'
    return `Seu nome é ${nome} e o seu esporte favotito é ${esporte}.`
}

const itp = perguntas()

console.log(itp.next().value)
console.log(itp.next('Tawan').value)
console.log(itp.next('Musculação').value)

// Usando loops nas funções geradoras:

function* contador() {
    let i = 0
    while(true) {
        yield i++
        if(i > 5) 
            break
    }
}

const itc = contador()

for(let c of itc){
    console.log(c)
}
