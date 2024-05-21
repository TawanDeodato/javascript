// Estudos sobre Promise no JavaScript (parte 2):

const numero = document.getElementById("numero")
const btn_promessa = document.getElementById("btn_promessa")

btn_promessa.addEventListener("click", (evt) => {
    numero.innerHTML = "Processando..."
    promessa()
        .then((retorno) => {
            numero.innerHTML = retorno
            numero.classList.remove("erro")
            numero.classList.add("ok")
        })
        .catch((retorno) => {
            numero.innerHTML = retorno
            numero.classList.add("erro")
            numero.classList.remove("ok")
        })
        
})

const promessa = () => {
    let p = new Promise((res, rej) => {
        let resultado = true
        let tempo = 3000
    
        setTimeout(() => {
            if (resultado == true){
                res ("Deu tudo certo!")
            } else {
                rej ("Deu tudo errado!")
            }
        },tempo)
    })
    return p
}

numero.innerHTML = "Esperando..."