// Clonagem de objeto:

const obj1 = {a: 1, b: 4};
const copia = Object.assign({}, obj1);

console.log(copia);

// Mesclando objeto:

const o1 = {a: 1};
const o2 = {b: 2};
const o3 = {c: 3};

const obj = Object.assign(o1, o2, o3);

console.log(obj);

// Transformando array em objeto

const arrayDeEntrada = [
    ['abc', 2],
    ['def', 4],
];

const obj2 = Object.fromEntries(arrayDeEntrada);

console.log(obj2)
// Transformando objeto em array

const objetoDeEntrada = {
    'abc': 2,
    'def': 4
}

const array = Object.entries(objetoDeEntrada);

console.log(array)