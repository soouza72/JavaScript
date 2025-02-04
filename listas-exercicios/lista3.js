let idade = prompt("qual sua idade?")
console.log("sua idade é ", idade)

if (idade >= 18) {
    console.log("você é maior de idade")
} else {
    console.log("você é menor de idade")
}

console.log("----------------")
let numero = prompt("escolha um número:")
let resultado = numero % 2 
if (resultado == 0) {
    console.log("o número é par")
} else {
    console.log("o número é impar")
}

console.log("----------------")
let nota = prompt("qual sua nota:")
if (nota>= 7)  {
    console.log("você foi aprovado!")
} else {
    console.log("você foi reprovado")
}

console.log("----------------")
let idade2 = prompt("qual sua idade?")
console.log("sua idade é ", idade2)

if (idade2 >= 18) {
    console.log("você tem sua entrada permitida!")
} else {
    console.log("você tem sua entrada proibida!")
}

console.log("----------------")
let senha = prompt("digite sua senha:")

if (senha == "1234") {
    console.log("senha correta!")
} else {
    console.log("senha incorreta!")
}

console.log("----------------")
let temperatura = prompt("quantos graus está hoje:")
if (temperatura>= 30)  {
    console.log("hoje é um dia quente!")
} else {
    console.log("hoje é um dia frio!")
}

console.log("----------------")
let numero1 = prompt("digite um número:")
if (numero1 > 0)  {
    console.log("o número é possitivo!")
} else {
    console.log("o número é negativo!")
}