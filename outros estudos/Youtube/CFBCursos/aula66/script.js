// Estudos sobre membros Static no JavaScript:

class Npc {
    static alerta = false
    constructor (energia) {
        this.energia = energia
    }
    info = function () {
        console.log(`Energia: ${this.energia}`)
        console.log(`Alerta: ${(Npc.alerta ? "Sim" : "Não")}`) 
        console.log(`-------------------------`)
    }
    static alertar = function () {
        Npc.alerta = true
    }
}

const npc1 = new Npc (100)
const npc2 = new Npc (75)
const npc3 = new Npc (60)

Npc.alertar()

npc1.info()
npc2.info()
npc3.info()