// Estudos sobre Geolocalização em JavaScript:

const long = document.getElementById("long")
const lati = document.getElementById("lati")

if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarLocalização, erroLocalização)
} else {
    console.log("Geolocalização nã suportada!")
}

function mostrarLocalização(pos) {
    lati.innerHTML = `Latitude: ${pos.coords.latitude}`
    long.innerHTML = `Longitude: ${pos.coords.longitude}`
    
}

function erroLocalização(pos) {
    lati.innerHTML = "Erro ao obter a localização"
    long.innerHTML = "Erro ao obter a localização"
}

