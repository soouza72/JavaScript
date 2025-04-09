// JAVASCRIPT -> SETINTERVAL -> MAIN.JS
let contador = 0

setInterval(function(){
    contado++
    console.log("Contador: "+contador)
}, 1000)

function pararContador() {
    clearInterval(intervalo)
}