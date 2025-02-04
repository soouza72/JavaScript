// 1
let idade = prompt("Qual a sua idade?")
if (idade < 12) {
    console.log("Criança")
} else if (idade < 17) {
    console.log("Adolescente")
} else if (idade < 59) {
    console.log("Adulto")
} else {
    console.log("Idoso")
}

// 2
let temperatura = prompt("Qual a temperatura em °C?")
if (temperatura < 10) {
    console.log("Muito Frio")
} else if (temperatura < 20) {
    console.log("Frio")
} else if (temperatura < 30) {
    console.log("Agradável")
} else {
    console.log("Muito Quente")
}

// 3
let turno = prompt("Qual o turno de estudo?")
if (turno == "M") {
    console.log("Bom dia!")
} else if (turno == "V") {
    console.log("Boa tarde!")
} else if (turno == "N") {
    console.log("Boa noite!")
} else {
    console.log("Turno inválido")
}

// 4
let valor = prompt("Qual o valor da compra?")
if (valor <= 100) {
    console.log("Desconto de 5%")
} else if (valor <= 200) {
    console.log("Desconto de 10%")
} else {
    console.log("Desconto de 15%")
}

// 5
let nota = prompt("Qual a sua nota?")
if (nota > 90) {
    console.log("A")
} else if (nota > 80) {
    console.log("B")
} else if (nota > 70) {
    console.log("C")
} else if (nota > 60) {
    console.log("D")
} else {
    console.log("F")
}

// 6
let dia = prompt("Digite um número de 1 a 7:")
if (dia = 1){
    console.log("Domingo")
} else if (dia = 2){
    console.log("Segunda")
} else if (dia = 3){
    console.log("Terça")
} else if (dia = 4){
    console.log("Quarta")
} else if (dia = 5){
    console.log("Quinta")
} else if (dia = 6){
    console.log("Sexta")
} else if (dia = 7){
    console.log("Sabádo")
} else {
    console.log("Inválido")
}

// 7
let distancia = prompt("Qual a distância da pista em metros?")
if (distancia < 400) {
    console.log("Pista curta")
} else if (distancia < 800) {
    console.log("Pista média")
} else if (distancia < 1500) {
    console.log("Pista longa")
} else {
    console.log("Pista muito longa")
}

// 8
let pontuacao = prompt("Qual a sua pontuação?")
if (pontuacao < 1000) {
    console.log("Iniciante")
} else if (pontuacao < 5000) {
    console.log("Intermediário")
} else if (pontuacao < 10000) {
    console.log("Avançado")
} else {
    console.log("Mestre")
}
