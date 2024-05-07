const caixaCursos = document.querySelector("#caixaCursos")
const btn_c = [...document.querySelectorAll(".curso")]
const c1_2 = document.querySelector("#c1_2")
const cursos = ["HTML", "CSS", "JavaScript", "PHP", "React", "MySQL", "ReactNative"]
const btnCursoSelecionado = document.getElementById("btnCursoSelecionado")
const btnRemoveCurso = document.getElementById("caixaRemoveCurso")
const btnAdicionarNovoCursoAntes = document.getElementById("btnAdicionarNovoCursoAntes")
const btnAdicionarNovoCursoDepois = document.getElementById("btnAdicionarNovoCursoDepois")
const nomeCurso = document.getElementById("nomeCurso")

let indice = 0

const tiraSelecao = () => {
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")]
cursoSelecionado.map((el) => {
    el.classList.remove("selecionado")
})
}

const criarNovoCurso = (curso) => {
    const novoElemento = document.createElement("div")
    novoElemento.setAttribute("id", "c" + indice)
    novoElemento.setAttribute("class", "curso c1")
    novoElemento.innerHTML = curso
    novoElemento.addEventListener("click", (evt) => {
        tiraSelecao()
        evt.target.classList.toggle("selecionado")
    })
    return novoElemento
}

cursos.map((el, chave) => {
    const novoElemento = criarNovoCurso(el)
    caixaCursos.appendChild(novoElemento)
    indice++
})

const cursoSelecionado = () => {
    const cursoSelecionado = [...document.querySelectorAll(".selecionado")] 
    return cursoSelecionado[0]
}

btnCursoSelecionado.addEventListener("click", (evt) => {
    try {
        alert ("Curso selecionado: " + cursoSelecionado().innerHTML)
    } catch (ex) {
        alert ("Selecione um curso")
    }
})

btnRemoveCurso.addEventListener("click", (evt) => {
    const cs = cursoSelecionado()
    if (cs == undefined) {
        alert("Nenhum curso selecionado")
    } else {
        cs.remove()
    }
})

btnAdicionarNovoCursoAntes.addEventListener("click", (evt) => {
    try {
        if (nomeCurso.value != "") {
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado())
        } else {
            alert("Digite o nome do curso")
        }
    } catch (ex) {
        alert("Nenhum curso selecionado")
    }
})

btnAdicionarNovoCursoDepois.addEventListener("click", (evt) => {
    try {
        if (nomeCurso.value != "") {
        const novoCurso = criarNovoCurso(nomeCurso.value)
        caixaCursos.insertBefore(novoCurso, cursoSelecionado().nextSibling)
        } else {
            alert("Digite o nome do curso")
        }
    } catch (ex) {
        alert("Nenhum curso selecionado")
    }
})