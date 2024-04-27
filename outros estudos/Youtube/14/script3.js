// Usando Filter, Find, ForEach, Map e Reduce

const arrBase = [
    {a: 2, b: 2},
    {a: 1, b: 2},
    {a: 5, b: 2},
    {a: 1, b: 2},
    {a: 10, b: 2},
]

const filtered = arrBase.filter(el => el.a > 2)

const find = arrBase.find(el => el.a == 10)

const forEach = arrBase.forEach(el => console.log(`a: ${el.a}, b: ${el.b}`))

const maped = arrBase.map(el => el.a += 1)

const reduce = arrBase.reduce((acc, curr) => acc = acc + curr.a, 0)

debugger