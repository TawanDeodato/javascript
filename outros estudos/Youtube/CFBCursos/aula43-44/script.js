const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoveCurso = document.getElementById("caixaRemoveCurso")

cursos.map((el, chave) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + chave)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = el

    const comandos = document.createElement("div")
    comandos.setAttribute("class", "comandos")

    const rb = document.createElement("input")
    rb.setAttribute("type", "radio")
    rb.setAttribute("name", "rb_curso")

    comandos.appendChild(rb)

    novoElemento.appendChild(comandos)

    caixaCursos.appendChild(novoElemento)
})

const radioSelecionado = () => {
    const todosRadios = [...document.querySelectorAll("input[type = radio]")]
    const radioSelecionado = todosRadios.filter((ele, ind, arr) => {
        return ele.checked
    }) 
    return radioSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    if (rs == undefined) {
        alert("Nenhum curso selecionado")
    }
    const cursoSelecionado = rs.parentNode.previousSibling.textContent
})

btnRemoveCurso.addEventListener("click", (evt) => {
    const rs = radioSelecionado()
    if (rs == undefined) {
        alert("Nenhum curso selecionado")
    }
    const cursoSelecionado = rs.parentNode.parentNode
    cursoSelecionado.remove()
})