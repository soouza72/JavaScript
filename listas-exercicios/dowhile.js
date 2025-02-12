// 1 

let contador = 1
while (contador <= 20) {
    console.log(contador)
    contador++
}
console.log("-------------------------------------------------")

// 2 

let resposta = "s"
do {
resposta = prompt("Deseja continuar? (s/n)")    
} while (resposta == "s" || resposta == "S") {
    console.log("Você não continuou")
}
console.log("-------------------------------------------------")

// 3 

let numeroFinal = prompt("Escolha um número para o final da sequência:")
let sequencia = 1
do {
    console.log(sequencia)
    sequencia++
} while (sequencia <= numeroFinal)

console.log("-------------------------------------------------")

// 4 

let seq = 1
do {
    console.log(seq)
    seq += 2
} while (seq <= 31)

console.log("-------------------------------------------------")

// 5 

let num = 0
do {
    let numero = prompt("Digite um número:")
    if (numero > 0) {
        console.log("NÚMERO POSITIVO")
    } else if (numero < 0) {
        console.log("NÚMERO NEGATIVO")
    } else {
        console.log("O NÚMERO É ZERO")
    }
    num++
} while (num < 5)

console.log("-------------------------------------------------")

// 6 

let continuar = 's'
do {
    let numero1 = prompt("Digite o primeiro número:")
    let numero2 = prompt("Digite o segundo número:")
    let soma = Number(numero1) + Number(numero2)
    console.log("A soma é:", soma)
    continuar = prompt("Você deseja fazer outra conta? (s para continuar)")
} while (continuar === 's')