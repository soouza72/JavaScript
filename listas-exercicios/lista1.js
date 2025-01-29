let num1 = 10; 
let num2 = 5; 

console.log("soma:", num1 + num2); 
console.log("subtração:", num1 - num2); 
console.log("multiplicação:", num1 * num2); 

if (num2 !== 0) { 
    console.log("divisão:", num1 / num2); 
    console.log("resto da divisão:", num1 % num2); } 
    
    else { 
        console.log("erro: divisão por zero não permitida."); }

console.log("----------------")

let largura = 8; 
let altura = 5; 
let area = largura * altura; 

console.log("área do retângulo:", area);

console.log("----------------")

let numero = 7; 

console.log("dobro:", numero * 2); 
console.log("metade:", numero / 2);

console.log("----------------")

let nota1 = 8; 
let nota2 = 7; 
let nota3 = 9; 
let media = (nota1 + nota2 + nota3) / 3; 

console.log("média aritmética:", media.toFixed(2));

console.log("----------------")

let celsius = 30; 
let fahrenheit = (celsius * 9/5) + 32; 

console.log("temperatura em fahrenheit:", fahrenheit);