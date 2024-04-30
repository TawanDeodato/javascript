// Estudos de for in...for of

let num = [10, 20, 30, 40, 50]

/* for(let i = 0; i < num.length; i++){
    console.log(i)
} */

for(n in num) {
    console.log(n)
}
// O resultado dessa condição vai ser igual a condição de cima

for(n of num) {
    console.log(n)
}
// O resultado dessa condição seria igual a condição de baixo:

for(let i = 0; i < num.length; i++){
    console.log(num[i])
} 