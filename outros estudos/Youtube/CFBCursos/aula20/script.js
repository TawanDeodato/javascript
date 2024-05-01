// Estudo de funções com retorno:

function soma(){
    let n1 = 6
    let n2 = 7
    let res = n1 + n2
    if(res % 2 == 0){
        return "Par"
    } else {
        return "Impar"
    }
}

let resultado = soma()

console.log(resultado)