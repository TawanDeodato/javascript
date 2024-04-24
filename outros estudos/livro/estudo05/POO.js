/* Objetos em javaScript são coleções bem simples de pares nome-valor. Tem duas formas de criar um objeto
simples em JavaScript. A primeira é esta: */

var obj = new Object()

// A segunda é assim:

var obj = {}

// Também podemos criar um objeto completo, desta maneira:

obj = {
    name: {
        first: 'Tawan',
        last: 'Santos'
    },
    endereco: 'Centro da terra'
}

// Existe também uma classe de objeto que define as carcterísticas do objeto, a classe se chama 'contructor'. 
// Aqui vai o modo que podemos declarar uma classe 'constructor' que representa um livro
var livro = new Livro('titulo', 'paginas', 'isbn')

function Livro(titulos, paginas, isbn) {
    this.titulo = 'titulo'
    this.paginas = 'paginas'
    this.isbn = 'isbn'
}



// Então, podemos acessar as suas propriedades e atualizá-las deste modo:

// console.log(livro.titulo) // mostra o titulo do livro
livro.titulo = 'Novo titulo' // modifica o valor do titulo do livro
console.log(livro.titulo) // mostra o valor modificado