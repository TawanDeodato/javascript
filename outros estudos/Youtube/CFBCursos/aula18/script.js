// Estudos de 'break' e 'continue'

let n = 0
let max = 100
let par = 0

/* while(n < max) {
    console.log(`CFBCursos - ${n}`)
    if(n >= 15) {
        break
    }
    n++
} */

// Agora usando a palavra reservada 'for':

for(let i = n; i < max; i++) {
    //console.log(`CFBCursos - ${i}`)
    if(i % 2 != 0) {
        continue
   }
   par++
}

console.log(`Foi encontrado ${par} números pares.`)