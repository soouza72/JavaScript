const perguntas = [
    {
        pergunta: "O que significa CPU?",
        opcoes: ["Central Program Unit", "Computer Processing Unit", "Central Processing Unit", "Control Program Utility"],
        correta: 2
    },
    {
        pergunta: "Qual desses é um sistema operacional?",
        opcoes: ["Intel", "Windows", "USB", "Wi-Fi"],
        correta: 1
    },
    {
        pergunta: "Qual empresa desenvolveu o sistema Android?",
        opcoes: ["Apple", "Google", "Microsoft", "IBM"],
        correta: 1
    },
    {
        pergunta: "Para que serve a memória RAM?",
        opcoes: ["Armazenar arquivos permanentemente", "Executar programas temporariamente", "Conectar à internet", "Controlar energia do PC"],
        correta: 1
    },
    {
        pergunta: "Qual dessas linguagens é usada no desenvolvimento web frontend?",
        opcoes: ["Python", "C#", "HTML", "SQL"],
        correta: 2
    },
    {
        pergunta: "Qual navegador foi criado pela Mozilla?",
        opcoes: ["Chrome", "Edge", "Opera", "Firefox"],
        correta: 3
    },
    {
        pergunta: "Qual é a principal função de um roteador?",
        opcoes: ["Armazenar dados", "Imprimir documentos", "Distribuir internet", "Proteger contra vírus"],
        correta: 2
    },
    {
        pergunta: "O que é um algoritmo?",
        opcoes: ["Um programa de computador", "Uma sequência de instruções", "Um hardware de rede", "Um tipo de software malicioso"],
        correta: 1
    },
    {
        pergunta: "Qual extensão representa um arquivo de imagem?",
        opcoes: [".docx", ".jpg", ".mp3", ".exe"],
        correta: 1
    },
    {
        pergunta: "O que é phishing?",
        opcoes: ["Um tipo de vírus", "Ataque que rouba dados pessoais", "Um software de segurança", "Um navegador web"],
        correta: 1
    }
]

let perguntaAtual = 0
let pontuacao = 0
let erros = 0
let opcaoSelecionada = null

const pergunta = document.getElementById("pergunta")
const opcoes = document.getElementById("opcoes")
const botaoProxima = document.getElementById("proxima")
const quiz = document.getElementById("quiz")
const pontuacaoFinal = document.getElementById("pontuacao")
const valorPontuacao = document.getElementById("valor-pontuacao")
const botaoReiniciar = document.getElementById("reiniciar")
const errosContador = document.getElementById("erros")
const acertos = document.getElementById("acertos")

function atualizarPlacar() {
    acertos.textContent = pontuacao
    errosContador.textContent = erros
}

function mostrarPergunta(){
    const perguntaAtualObj = perguntas[perguntaAtual]
    pergunta.textContent = perguntaAtualObj.pergunta
    opcoes.textContent = ""
    perguntaAtualObj.opcoes.forEach((opcao, indice) => {
        const botao = document.createElement("button")
        botao.textContent = opcao
        botao.classList.add("opcao")
        botao.addEventListener("click", ()=>selecionarOpcao(indice))
        opcoes.appendChild(botao)
    })
    opcaoSelecionada = null
    botaoProxima.disabled = true
}

function selecionarOpcao(indice){
    opcaoSelecionada = indice
    const botoes = document.querySelectorAll(".opcao")
    botoes.forEach((botao, i)=>{
        botao.classList.toggle("selecionada", i == indice)
    })
    botaoProxima.disabled = false
}

function mostrarPontuacao(){
    quiz.classList.add("esconder")
    pontuacaoFinal.classList.remove("esconder")
    valorPontuacao.textContent = pontuacao
}

botaoProxima.addEventListener("click", ()=>{
    if(opcaoSelecionada == perguntas[perguntaAtual].correta){
        pontuacao++
    } else {
        erros++
    }
    atualizarPlacar()

    perguntaAtual++
    if(perguntaAtual < perguntas.length){
        mostrarPergunta()
    } else {
        mostrarPontuacao()
    }
})

botaoReiniciar.addEventListener("click", ()=>{
    perguntaAtual = 0
    pontuacao = 0
    erros = 0

    quiz.classList.remove("esconder")
    pontuacaoFinal.classList.add("esconder")

    atualizarPlacar()
    mostrarPergunta()
})

mostrarPergunta()