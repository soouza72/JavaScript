// Jogo Pedra, Papel e Tesoura
// Variáveis para armazenar os pontos do jogador e pc
let placarJogador = 0
let placarPc = 0

// Variáveis para armazenar as rodadas
let rodadas = Number(prompt("Quantas vezes deseja jogar?"))

// Laço de repetição que fará as rodadas
for (let i = 0; i < rodadas; i++) {

    const escolhaJogador = prompt("Escolha pedra, papel ou tesoura:")
    // Solicita que o usuário informe qual ele quer

    const escolhaPC = ["pedra", "papel", "tesoura"][Math.floor(Math.random() * 3)]
    // Gera uma escolha aleatoria para o computador
    // Criamos um array com as opções e usamos o random para escolher uma de forma aleatoria

    alert(`Voce escolheu ${escolhaJogador}`)
    alert(`O computador escolheu ${escolhaPC}`)
    // Mostrando qual foi a nossa escolha e qual a escolha do computador
    if (escolhaJogador == escolhaPC) {
        alert("Empate")
    } else if (escolhaJogador == "pedra" && escolhaPC == "tesoura") { //criamos a primeira verificação 
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "papel" && escolhaPC == "pedra") { //criamos a segunda verficação 
        alert("Você venceu")
        placarJogador++
    } else if (escolhaJogador == "tesoura" && escolhaPC == "papel") { //criamos a terceira verificação 
        alert("Você venceu")
        placarJogador++
    } else {
        alert("Você perdeu")
        placarPc++
    }
    // Exibe o placar no console
    console.log("Placar jogador: ", placarJogador)
    console.log("Placar PC: ", placarPc)
}
// Placar final
alert(`Fim de jogo! Placar final: Jogador ${placarJogador} x ${placarPc} Computador`)