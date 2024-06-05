const characterId = document.getElementById("characterId")
const btn_pesq = document.getElementById("btn_pesq")
const btn_limpar = document.getElementById("btn_limpar")
const content = document.getElementById("content")
const conteinerResult = document.getElementById("result_style")
const img = document.getElementById("img")

const fetchApi = (value) => {
    const url = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((response) => response.json())
    .then((data) => {
        return data
    })

    return url
}

const keys = ['name', 'status', 'species', 'gender', 'origin', 'episode']
const newKeys = {
    name: "Nome",
    status: "Status",
    species: "Espécie",
    gender: "Gênero",
    origin: "Planeta de Origem",
    episode: "Episódios"
}

const buildResult = (result) => {
    return keys.map((key) => document.getElementById(key))
      .map((elem) => {
        if(elem.checked === true && (Array.isArray(result[elem.name])) === true) {
            const arrayResult = result[elem.name].join('\r\n')
            const newElem = document.createElement("p");
            newElem.innerHTML = `${newKeys[elem.name]} : ${arrayResult}`;
            content.appendChild(newElem)
        } else if(elem.checked === true && (elem.name === 'origin')) {
            const newElem = document.createElement("p");
            newElem.innerHTML = `${newKeys[elem.name]} : ${result[elem.name].name}`;
            content.appendChild(newElem)
        } else if(elem.checked === true && typeof(result[elem.name]) !== 'object') {
            const newElem = document.createElement("p");
            newElem.innerHTML = `${newKeys[elem.name]} : ${result[elem.name]}`;
            content.appendChild(newElem)
        } 
      })
}

btn_pesq.addEventListener("click", async (evt) => {
    evt.preventDefault();

    if(characterId.value === '') {
        img.src = ""
        return content.innerHTML = "Coloca um número ali para pesquisar antes né? seu animal!"
    }

    const result = await fetchApi(characterId.value);
    if(content.firstChild === null) {
        conteinerResult.className = "result_style"
        img.src = `${result.image}`; 
        buildResult(result);
    } else {
        content.innerHTML = ""
        conteinerResult.className = "result_style"
        img.src = `${result.image}`; 
        buildResult(result);
    }
})

btn_limpar.addEventListener("click", () => location.reload())