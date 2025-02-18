// 1
let filmes = ["Poderoso Chefão", "Rei leão", "Boneca do mal"]

console.log(filmes[0])

console.log("----------------")

// 2
let frutas = ["Pitaya", "Manga", "Banana", "Morango", "Melancia"]

console.log(frutas[3])

console.log("----------------")

// 3
let cores = ["Preto", "Branca", "Rosa"]

console.log(cores[0])

cores.push("Roxo")
console.log(cores)

for(let i = 0; i < cores.length; i++) {
    console.log(cores[i])
}

console.log("----------------")

// 4
let numeros = ["1", "2", "3", "4"]

console.log(numeros[0])

numeros.pop(3)
console.log(numeros)

for(let i = 0; i < numeros.length; i++) {
    console.log(numeros[i])
}

console.log("----------------")

// 5
let cidades = ["Suzano", "Mogi"]

console.log(cidades[0])

cidades.unshift("Morumbi")
console.log(cidades)

for(let i = 0; i < cidades.length; i++) {
    console.log(cidades[i])
}

console.log("----------------")

// 6
let animais =["Preá", "Capivara", "Saruê"]

console.log(animais[0])

animais.shift(0)
console.log(animais)

for(let i = 0; i < animais.length; i++) {
    console.log(animais[i])
}

console.log("----------------")

// 7
let carros = ["Uno", "Fiat", "Bmw", "Kia"]

console.log(carros)


console.log("----------------")

// 8
let num1 = []
num1.push(10, 20, 30)
num1.unshift(5)
num1.pop()
num1.shift()

for (cont = 0; cont < animais.length; cont++) {
    console.log("Array final:", num1[cont])
}
console.log("Tamanho do array:", num1.length)