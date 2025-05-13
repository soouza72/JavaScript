// Chamando os elementos do HTML
const letras = document.querySelector(".container-letras")
const linhaBackspaceEnter = document.querySelector("#linhaBackspaceEnter")
const linhaTeclado1 = document.querySelector("#linhateclado1")
const linhaTeclado2 = document.querySelector("#linhateclado2")
const linhaTeclado3 = document.querySelector("#linhateclado3")

// Definindo as letras de cada linha
const teclasLinha1 = ["Q","W","E","R","T","Y","U","I","O","P"]
const teclasLinha2 = ["A","S","D","F","G","H","J","K","L","Ç"]
const teclasLinha3 = ["Z","X","C","V","B","N","M"]

// Define o número de tentivas (linhas) e o tamanho das palavras (colunas)
const linhas = 6
const colunas = 5

// Variável que guarda onde o jogador está atualmente
let linhaAtual = 0
let colunaAtual = 0

// Define as palavras que podem ser
const palavrasSecretas = ["SENAI", "LIVRO", "PLANO", "NORTE", "TREVO"]
let mapaPalavra = {}
let palavraSecreta = palavrasSecretas[Math.floor(Math.random() * palavrasSecretas.length)]

for(let i = 0; i < palavraSecreta.length; i += 1){
    mapaPalavra[palavraSecreta[i]] = i
}

// Matriz onde as tentativas serão armazenadas
const palpites = []

for(let l=0; l < linhas; l+=1) { //letra L minúscula
    palpites[l] = new Array(colunas)
    const linhasLetras = document.createElement("div")
    linhasLetras.setAttribute("id","linha" + l)
    linhasLetras.setAttribute("class", "linha-letras")
}

// Cria as colunas
for(let c = 0; c < colunas; c += 1) {
    const colunaLetra = document.createElement("div")
    colunaLetra.setAttribute("id", "linha" + l + "coluna" + c)
    colunaLetra.setAttribute("class", 1 == 0 ? "coluna-letra digitando":"coluna-letra")
    linhasLetras.append(colunaLetra)
    palpites[l][c] = "" //incia vazio
}

// Adiciona a linha criada ao site
letras.append(linhasLetras);

// Verifica se a palavra digitada está correta
function verificarPalpite() {
    // Junta as letras digitadas
    const palpite = palpites[linhaAtual].join("");
    if (palpite.length !== colunas) {
        return; // Se o palpite estiver incompleto ele não verifica
    }
}
    
    // Pega a linha atual que estamos
    const colunaAtuais = document.querySelectorAll(".digitando");
    for (let i = 0; i < colunas; i += 1) {
        const letra = palpite[i];

        if(mapaPalavra[letra] == undefined){
            colunaAtuais[i].classList.add("errada")
        } else if (mapaPalavra[letra]==i){
            colunaAtuais[i].classList.add("certa");
        } else if (mapaPalavra[letra]==i) {
            colunaAtuais[i].classList.add("deslocada");
    }
}
    if (palpite == palavraSecreta) {
        window.alert("Acertou! Parabéns"); // Se acertar a palavra
    } else if (linhaAtual == linhas - 1) {
        // Se errar a palavra e acabar as tentativas
        window.alert("Errou");
    } else {
        // Se errar a palavra mas ainda tiver tentativas
        moverParaProximaLinha();
    }