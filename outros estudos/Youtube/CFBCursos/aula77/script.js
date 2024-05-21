// Estudos sobre Data e Hora no JavaScript:

const div_data = document.getElementById("div_data")
const div_relogio = document.getElementById("div_relogio")
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