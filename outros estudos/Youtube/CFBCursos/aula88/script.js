const btn_alert = document.getElementById("btn_alert")
const btn_confirm = document.getElementById("btn_confirm")
const btn_prompt = document.getElementById("btn_prompt")

btn_alert.addEventListener("click", (evt) => {
    alert("Isso é um alerta!")
})

btn_confirm.addEventListener("click", (evt) => {
    // const ret = confirm("Isso é uma aba de confirmação, ok?")
    if (confirm("Isso é uma aba de confirmação, ok?")) {
        console.log("Botão OK pressionado")
    } else {
        console.log("Botão CANCELAR pressionado")
    }
})

btn_prompt.addEventListener("click", (evt) => {
    const nome = prompt("Digite seu nome:")
    if(nome==null) {
        console.log("Botão CANCELAR pressionado")
    }else {
        console.log("O nome digitado foi: " + nome)
    }
})