// Estudos sobre Data e Hora no JavaScript:

const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
const btn_ativar = document.getElementById("btn_ativar")
const btn_parar = document.getElementById("btn_parar")
const tmp_alarme = document.getElementById("tmp_alarme")
const hora_alarme = document.getElementById("hora_alarme")
const timer = document.getElementById("timer")

let ts_atual = null
let ts_alarme = null
let alarme_ativado = false
let alarme_tocando = false

btn_ativar.addEventListener("click", () => {
    ts_atual = Date.now()
    ts_alarme = ts_atual + (tmp_alarme.value*1000)
    alarme_ativado = true
    const dt_alarme = new Date(ts_alarme)
    hora_alarme.innerHTML = "Hora do Alarme: " + dt_alarme.getHours() + ":" + dt_alarme.getMinutes() + ":" + dt_alarme.getSeconds()
})

btn_parar.addEventListener("click", () => {
    alarme_ativado = false
    alarme_tocando = false
    hora_alarme.innerHTML = "Hora do alarme: "
    tmp_alarme.value = 0
    timer.classList.remove("alarme")
})

const data = new Date ()

//  console.log(Date.now())  // Timestamp
console.log(data)
console.log(data.getMonth())

let data_dia = data.getDate()
data_dia = data_dia < 10 ? "0" + data_dia : data_dia

let data_mes = data.getMonth()
data_mes = data_mes < 10 ? "0" + data_mes : data_mes

const data_r = data_dia + "/" + data_mes + "/" + data.getFullYear()

div_data.innerHTML= data_r


const relogio = () => {
    const data = new Date()
    let hora = data.getHours()
    let minuto = data.getMinutes()
    let segundos = data.getSeconds()
    hora = hora < 10 ? "0" + hora : hora
    minuto = minuto < 10 ? "0" + minuto : minuto
    segundos = segundos < 10 ? "0" + segundos : segundos
    const hora_completa = hora + ":" + minuto + ":" + segundos
    div_relogio.innerHTML = hora_completa
    if (alarme_ativado && !alarme_tocando) {
        if(data.getTime() >= ts_alarme) {
            alarme_tocando = true
            timer.classList.add("alarme")
        }
    }
}

const intervalo = setInterval(relogio, 1000)


// getDate() = Dia do mês
// getDay() = Dia da semana (número)
// GetFullYear() = Ano com 4 dígitos
// getHours() = Horas
// getMilliseconds() = Milisegundos
// getMinutes() = Minutos
// getSeconds() = Segundos
// getTime() = Timestamp (Milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// Date.now() = Timestamp (Milisegundos desde 1 de janeiro de 1970, 00:00:00 UTC)
// getTimezoneOffset() = Timezone da localidade
// setDate() = Define um dia do mês para a data
// setMonth() = Define um mês para a data
// setFullYear() = Define um ano para a data
// setHours() = Define horas
// setMinutes() = Define minutos 
// setSeconds() = Define segundos 
// setMillisecondsw() = Define milisegundos 
// toDateString() = Retorna somente a data