const characterId = document.getElementById("characterId")
const btn_pesq = document.getElementById("btn_pesq")
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

const keys = ['name', 'status', 'species', 'gender', 'origin', 'image', 'episode']

const buildResult = (result) => {
    const newObject = {};
    keys.map((key) => document.getElementById(key))
      .map((elem) => {
        elem.checked && (newObject[elem.name] = result[elem.name])
      })
      return newObject
}

btn_pesq.addEventListener("click", async (evt) => {
    evt.preventDefault()
    const result = await fetchApi(characterId.value)
    // content.textContent = `${JSON.stringify(result, undefined, 2)}`
    content.textContent = `${JSON.stringify(buildResult(result), undefined, 2)}`
    console.log(buildResult(result))
    img.src = `${result.image}`
})