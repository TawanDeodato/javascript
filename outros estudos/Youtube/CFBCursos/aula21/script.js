//  Estudos de funções parametrizadas

let nome = 0

function str(p3) {
    return p3
}

nome = str("Tawan")

// Podemos imprimir a mistura de duas funções dentro do log dessa forma:


function soma(p1 = 0, p2 = 0) { // Colocamos um valor padrão para caso não seja chamado nenhum valor
    let num = p1 - p2
    console.log(`A idade de ${nome} é ${num} anos`)
}

soma(2024, 2002)