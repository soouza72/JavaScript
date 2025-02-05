// Verificar se a pessoa pode votar
let idade = 18
let tituloEleitor = true

if(idade >= 18 && tituloEleitor == true) {
    console.log("Pode votar")
} else {
    console.log("Não pode votar")
}

// Verificar se o número está dentro do intervalo
let numero = 21
if (numero >= 10 && numero <= 20) {
    console.log("O número está entre 10 e 20")
} else {
    console.log("O número está fora do intervalo")
}

// Compra com desconto
let valor = 150
let clienteVip = false
if(valor >= 100 || clienteVip == true) {
    console.log("Você ganhou frete grátis")
} else {
    console.log("Tem que pagar frete")
}

// Número no intervalo
let num = 10
if (num >= 5 || num <= 20) {
    console.log("Funcionou")
} else {
    console.log("Não funcionou")
}