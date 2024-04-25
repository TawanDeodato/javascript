// Na pasta 'estudo05' eu fiz alguns comentários e exemplos sobre POO no JavaScript, mas vou dar uma recapitulada no código. Podemos declarar um objeto assim:

/* vou colocar como comentário por que o próprio vscode indica fazer uma 'class constructor'
function Livro(titulo, paginas, isbn) {
    this.titulo = titulo
    this.pagina = pagina
    this.isbn = isbn
}
Livro.prototype.printTitulo = function() {
    console.log(this.titulo)
} */

// Podemos simplificar essa sintaxe desta forma:

class Livro {
    constructor(titulo, paginas, isbn) {
        this.titulo = titulo
        this.paginas = paginas
        this.isbn = isbn
    }
    printIsbn() {
        console.log(this.isbn)
    }
}

// Podemos simplesmente usar a palavra reservada 'class' e declarar uma classe com uma função 'constructor'.

let livro = new Livro('tittle', 'pag', 'isbn')
console.log(Livro.titulo) // Exibe o título do livro
Livro.titulo = 'Novo Titulo' // Altera o valor do título do livro
console.log(Livro.titulo) // Exibe o título do livro