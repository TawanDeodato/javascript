// Estudos sobre objetos
// Todas as variáveis e funções dentro de um objeto são chamados de propriedades
// Os objetos podem ser iniciados basicamente de 3 formas. São essas: new Objet(), Objet.create() ou usando
// a forma notação literal 'const'.

// Dot notation (notação de ponto), serve para acessar ou declarar uma noca propriedade ou método.

const dotNotation = {
    prop1: "Eu sou uma propiedade que será acessada usando dot notatio.",
    metodo: function() {
        return "Sou o retorno de um método, ou seja, uma função dentro de um objeto."
    } 
}

// acessando a propriedade e o método:

console.log(dotNotation.prop1)
console.log(dotNotation.metodo())

// Declarando uma nova propriedade e depois um novo método:

dotNotation.prop2 = "Sou outra propriedade com valor tipo string."
dotNotation.metodo2 = () => "Sou o retorno de outro método."

console.log(dotNotation.prop2)
console.log(dotNotation.metodo2())