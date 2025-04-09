/* CONTAGEM REGRESSIVA -> MAIN.JS */
let intervalo
let texto = document.getElementById("contador")
function iniciarContagem() {
    clearInterval(intervalo)


    let campoData = document.getElementById("dataEvento")
    let dataEscolhida = campoData.value

    //verifica se o usuario escolheu a data
    if(!dataEscolhida) {
        texto.innerText = "Escolha uma data"
    }
    //Cria um objeto da data e inicia a contagem 00:00
    let data = new Date(dataEscolhida + "T00:00:00") 
}

    //Inicia a contagem regressiva e atualizada a cada segundo
    intervalo 