// Estudos da coleção Map no JavaScript:

const caixa = document.querySelector("#caixa")

let mapa = new Map()

mapa.set("curso", "JavaScript")
mapa.set(10, "Teste")
mapa.set(1, 100)
mapa.set("Canal", 100)

console.log(mapa)

// caixa.innerHTML = mapa.get("curso")

let pes = 10
let res = ""
if (mapa.has(pes)) {
    res = `A chave existe na coleção com o valor: ${mapa.get(pes)}`
} else {
    res = "A chave não está na coleção"
}

caixa.innerHTML = res

mapa.forEach((el) => {
    console.log(el)
})