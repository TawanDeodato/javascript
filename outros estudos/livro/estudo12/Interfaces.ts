// Em TypeScript, há dois conceitos de interfaces. O primerio está realcionado à atribuição de um tipo de uma variável.

interface Person {
    name: string;
    age: number;
}
function printName(person: Person) {
    console.log(person.name)
}

const john = { name: 'John', age: 21}
const mary = { name: 'Mary', age: 21}

printName(john)
printName(mary)