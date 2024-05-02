// Estudos sobre o operador 'THIS' em JavaScript

// Froma simples de usar o this

// function aluno(nome, nota){
//     this.nome = nome
//     this.nota = nota

//     console.log(nome)
//     console.log(nota)
// }

// aluno("Tawan", 69)

function aluno(nome, nota){
    this.nome = nome
    this.nota = nota

    this.dados_anonimos = function() {
        setTimeout(function(){
            console.log(this.nome)
            console.log(this.nota)
        },1000) // <- Tempo para a função começar a rodar
    }

    this.dados_arrow = function() {
        setTimeout(() => {
            console.log(this.nome)
            console.log(this.nota)
        },1000) // <- Tempo para a função começar a rodar
    }
}

const al1 = new aluno("Bruno", 100)
al1.dados_anonimos()
al1.dados_arrow()