// Estudos sobre Symbol no JavaScript (parte 2):

class Jogador {
    constructor(nome) {
        this.nome = nome
        this.id = Symbol()
    }
}

let jogadores = [new Jogador("j1"), new Jogador("j2"), new Jogador("j3"), new Jogador("j4"), new Jogador("j1"), new Jogador("j3"),]

let s = []

// jogadores = jogadores.filter((j) => {
//     return j.id != s1
// })
let s_jogadores = jogadores.filter((j) => {
    return j.nome == "j1"
})

s = s_jogadores.map((j) => {
    return j.id
})

console.log(jogadores)
console.log(s_jogadores)
console.log(s)