let idade = prompt("qual a sua idade?")
let carteiraMotorista = true 

if(idade >= 18 && carteiraMotorista == true) {
    console.log("Você pode dirigir!")
} else {
    console.log("Você não pode dirigir!")
}

console.log("----------------")
let anosTrabalho = prompt("quantos anos você trabalha nessa empresa?")
let projeto = prompt("qual a sua idade?")

if(anosTrabalho >= 5 && projeto >= 10) {
    console.log("Você está elegível para promoção!")
} else {
    console.log("Você não está elegível para eleição!")
}

console.log("----------------")
let idade2= prompt("qual a sua idade?")

if(idade2 >= 18 && idade2 <= 30) {
    console.log("Você pode entrar!")
} else {
    console.log("Você não pode entrar!")
}

console.log("----------------")
let idade3 = prompt("Qual sua idade?")
let experiencia = true 

if(idade3 >= 21 && experiencia == true) {
    console.log("Você foi aceito para a vaga!")
} else {
    console.log("Você não foi aceito para a vaga!")
}

console.log("----------------")
let usuario = prompt("Digite o nome de usuário:") 
let senha = prompt("Digita a senha:") 

if(usuario == "admin" && senha == "1234") {
    console.log("Login bem-sucedido!")
} else {
    console.log("Nome de usuário ou senha incorretos!")
}

console.log("----------------")
let numero = prompt("Escolha um número")

if(numero >= 10 && numero <= 20) {
    console.log("O número está dentro do intervalo de 10 e 20")
} else if (numero >= 30 && numero <= 50) {
    console.log("O número está dentro do intervalo entre 30 e 50")
} else {
    console.log("O número não está no intervalo de 10 e 20 nem de 30 e 50")
}

console.log("----------------")
let numero2 = prompt("Escolha um número:") 

if(numero2 < 10 || numero2 > 100 && numero2 == 50) {
    console.log("O número é aceito!")
} else {
    console.log("O número não é aceito!")
}