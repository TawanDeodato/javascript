const nome = Symbol("nome")
const numero = Symbol("Numero")
const corUniforme = Symbol("cor do uniforme")

const jogador = {
    [nome]: "J1",
}

jogador[numero]= 10,
jogador[corUniforme]= "Amarelo"

for (p in jogador) {
    console.log(p)
}

console.log(jogador)
console.log(jogador[nome])
console.log(jogador[numero])
console.log(jogador[corUniforme])