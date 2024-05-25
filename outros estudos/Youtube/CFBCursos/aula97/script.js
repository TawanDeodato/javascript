// Estudos sobre Symbol no JavaScript:

const s1 = Symbol()
const s2 = Symbol()
const s3 = Symbol.for("Tawan")
const s4 = Symbol.for("JavaScript")

console.log(s1)
console.log(s2)

console.log(s1==s2)
console.log(s3==s4)

console.log(Symbol.keyFor(s3))
console.log(Symbol.keyFor(s4
    
))