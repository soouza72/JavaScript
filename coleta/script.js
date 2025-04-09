function mostrarNome() {
    let nome = document.getElementById("nome").value
    let mensagem = document.getElementById("mensagem")
    mensagem.innerText = "Oi," + nome
} //mostrando o input de um texto

function mostrarIdade() {
    let idade = parseInt(document.getElementById("idade").value)
    let resultado = document.getElementById("resultado")
    resultado.innerText = "Você tem " + idade + " anos."
} //mostrando o input de um tipo número

function mostrarComentario() {
    let comentario = document.getElementById("comentario").value
    let comentarioExebido = document.getElementById("comentarioExibido")
    comentarioExebido.innerText = "Comentário: " + comentario
} //mostrar o texto do textarea

function atualizarTexto() {
    let campoTexto = document.getElementById("campoTexto").value
    let digitado = document.getElementById("TextoDigitado")
    digitado.innerText = "Você digitou: " + texto
} //mostrando o texto do input em tempo real