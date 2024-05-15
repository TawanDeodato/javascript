const pessoa = {
    nome: "Tawan",
    idade: "21 Anos",
    curso: "JavaScript",
    aulas: {
        aula1: "Introdução",
        aula2: "Variáveis",
        aula3: "Condicional"
    }
}

// Veja no devtools do google
// console.log(pessoa)
// console.log(pessoa.nome)
// console.log(pessoa.aulas)
// console.log(pessoa.aulas.aula1)

const s_json_pessoa = JSON.stringify(pessoa) // Converter o objeto literal em uma string JSON

// console.log(pessoa)
console.log(s_json_pessoa)

const string_pessoa = '{"nome": "Tawan", "idade": "21 Anos", "curso": "JavaScript", "aulas": {"aula1: "Introdução", "aula2": "Variáveis", "aula3": "Condicional"}}'

s_json_pessoa = JSON.parse(string_pessoa) // Converte uma string JSON em um objeto literal