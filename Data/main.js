// JAVASCRIPT -> DATA -> MAIN.JS
let dataAtual = new Date()
console.log(dataAtual)

let dia = dataAtual.getDate()
let mes = dataAtual.getMonth()
let ano = dataAtual.getYear()
console.log(`${dia}/${mes+1}/${ano}`) //dd//mm/aaaa

let horas = dataAtual