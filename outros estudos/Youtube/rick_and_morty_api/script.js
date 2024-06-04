const characterId = document.getElementById("characterId")
const btn_go = document.getElementById("btn_go")
const content = document.getElementById("content")
const img = document.getElementById("img")

const fetchApi = (value) => {
    const url = fetch(`https://rickandmortyapi.com/api/character/${value}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        return data
    })

    return url
}

btn_go.addEventListener("click", async (evt) => {
    evt.preventDefault()
    const result = await fetchApi(characterId.value)
    content.textContent = `${JSON.stringify(result, undefined, 2)}`
    img.src = `${result.image}`
})