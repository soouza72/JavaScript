let num1 = 10;
let num2 = 20; 

console.log(num1 > num2 ? "O primeiro número é maior que o segundo." : ""); 
console.log(num1 < num2 ? "O primeiro número é menor que o segundo." : ""); 
console.log(num1 === num2 ? "Os dois números são iguais." : "");

console.log("----------------")
let idade = 18; 

console.log(idade >= 16 ?"Você tem idade para votar." : ""); 
console.log(idade >= 18 && idade <= 70 ? "Você é obrigado a votar." : "")

console.log("----------------")
console.log(idade >= 18 ? "Você é maior de idade." : ""); 
console.log(idade >= 60 ? "Você é idoso." : "");

console.log("----------------")
let nomeUsuario = "admin"; 

console.log(nomeUsuario === "admin" ? "Login bem-sucedido. Usuário é admin." : "Usuário comum.");

console.log("----------------")
let numero = 15; 

console.log(numero % 3 === 0 ? "O número é divisível por 3." : ""); 
console.log(numero % 5 === 0 ? "O número é divisível por 5." : "");

console.log("----------------")
let saldo = 500; 
let saque = 200; 

console.log(saldo >= saque ? "Saque realizado com sucesso." : "Saldo insuficiente."); saldo -= saque; 
console.log(saldo > 100 ? "O saldo após o saque é maior que R$100." : "O saldo após o saque é inferior a R$100.");