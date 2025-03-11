function alternarImagem() {
    let imagem = document.getElementById("imagem");
    if (imagem.style.display === "none") {
        imagem.style.display = "block";
    } else {
        imagem.style.display = "none";
    }
}

console.log("----------------")
function mudarTextoBg() {
    texto.style.color = "white"
    document.body.style.backgroundColor = "black"
}

console.log("----------------")
function completarTexto() {
    let texto = document.getElementById("texto");
    texto.innerText = "Meu nome é Matheus Souza, tenho 17 anos, moro em Suzano city, estudo no Ensino Médio e faço o curso de Desenvolvimento de Sistemas.";
}

console.log("----------------")
let cores = ["green", "yellow", "blue"];
let indice = 0;

function mudarCor() {
    let texto = document.getElementById("texto");
    texto.style.color = cores[indice];
    indice = (indice + 1) % cores.length;
}

console.log("----------------")
function Alert() {
    alert("Pare de clicar no botão!");
}

console.log("----------------")
function escolherPorta(porta) {
    let imagem = document.getElementById("imagem");
    imagem.style.display = "block";  

    if (porta === 1) {
        alert("Você ganhou um carro!");
        imagem.src = "carro.jpg"; 
    } else if (porta === 2) {
        alert("Você não ganhou nada!");
        imagem.src = "caixa.jpg"; 
    } else if (porta === 3) {
        alert("Parabéns, você encontrou o tesouro!");
        imagem.src = "tesouro.jpg"; 
    }
}
 
console.log("----------------")
function redimensionar() {
    let imagem = document.getElementById("imagem");
    let novoTamanho = Math.floor(Math.random() * (300 - 20 + 1)) + 20;   
    imagem.style.width = novoTamanho + "px";
}

console.log("----------------")
let contador = 0;

function mudarCor() {

    document.getElementById("div1").style.backgroundColor = "black";
    document.getElementById("div2").style.backgroundColor = "black";
    document.getElementById("div3").style.backgroundColor = "black";

    if (contador === 0) {
        document.getElementById("div1").style.backgroundColor = "red";
        alert("PARE");
    } else if (contador === 1) {
        document.getElementById("div2").style.backgroundColor = "yellow";
        alert("ATENÇÃO!");
    } else if (contador === 2) {
        document.getElementById("div3").style.backgroundColor = "green";
        alert("PODE IR!");
        contador = -1;
    }


    contador++;
}

console.log("----------------")
function trocarImagem(genero) {
    let imagem = document.getElementById(genero);
    imagem.style.display = "block"; 
}

function voltarImagem(genero) {
    let imagem = document.getElementById(genero);
    imagem.style.display = "none"; 
}