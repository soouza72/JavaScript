// ================= Enigmas =================
const enigmas = {
  quadro: {
    pergunta: "🖼️ Qual número vem a seguir? 2, 4, 8, 16, ?",
    resposta: "32",
  },
  caixa: {
    pergunta: "📦 Qual é a capital do Brasil?",
    resposta: "brasília",
  },
  livro: {
    pergunta: "📖 Começo com 'e', termino com 'e' e só tenho uma letra. O que sou?",
    resposta: "envelope",
  },
  janela: {
    pergunta: "🪟 Quanto é 3² + 4²?",
    resposta: "25",
  },
  armario: {
    pergunta: "🚪 Qual palavra tem 5 letras e é igual de trás pra frente?",
    resposta: "radar",
  },
};

// Estado de resolução dos enigmas
const resolvidos = {
  quadro: false,
  caixa: false,
  livro: false,
  janela: false,
  armario: false,
};

let objetoAtual = "";

// ================= Seleção de Elementos =================
const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const endScreen = document.getElementById("endScreen");

const botoes = document.querySelectorAll("#botoes .btn");
const perguntaBox = document.getElementById("perguntaBox");
const perguntaTexto = document.getElementById("perguntaTexto");
const respostaInput = document.getElementById("resposta");
const enviarBtn = document.getElementById("enviarBtn");
const mensagem = document.getElementById("mensagem");
const contador = document.getElementById("contador");

const successSound = document.getElementById("successSound");
const errorSound = document.getElementById("errorSound");

// ================= Eventos =================
// Iniciar jogo
document.getElementById("startBtn").addEventListener("click", () => {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
});

// Botões dos objetos
botoes.forEach((btn) => {
  btn.addEventListener("click", () => {
    const obj = btn.getAttribute("data-obj");
    mostrarPergunta(obj);
  });
});

// Verificar resposta
enviarBtn.addEventListener("click", verificarResposta);
respostaInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") verificarResposta();
});

// Jogar novamente
document.getElementById("restartBtn").addEventListener("click", () => location.reload());

// ================= Funções Principais =================
function mostrarPergunta(obj) {
  if (resolvidos[obj]) {
    escreverMensagem("✅ Esse enigma já foi resolvido!");
    return;
  }

  objetoAtual = obj;
  perguntaTexto.textContent = enigmas[obj].pergunta;
  perguntaBox.classList.remove("hidden");
  respostaInput.value = "";
  escreverMensagem("");
  respostaInput.focus();
}

function verificarResposta() {
  const input = respostaInput.value.trim().toLowerCase();
  const correta = enigmas[objetoAtual].resposta.toLowerCase();

  if (input === correta) {
    resolvidos[objetoAtual] = true;
    escreverMensagem("✅ Resposta correta!");
    successSound.play();
  } else {
    escreverMensagem("❌ Resposta errada. Tente novamente!");
    errorSound.play();
  }

  atualizarContador();
  perguntaBox.classList.add("hidden");
  verificarSaida();
}

function atualizarContador() {
  const count = Object.values(resolvidos).filter((v) => v).length;
  contador.textContent = `Enigmas resolvidos: ${count} / 5 ✅`;
}

function verificarSaida() {
  const resolvidosCount = Object.values(resolvidos).filter((v) => v).length;
  const todos = resolvidosCount === 5;
  if (todos) {
    gameScreen.classList.add("hidden");
    document.getElementById("endTitle").textContent = "🎉 Parabéns!";
    document.getElementById("endMsg").textContent = "Você resolveu todos os enigmas e escapou!";
    endScreen.classList.remove("hidden");
    successSound.play();
  } else if (resolvidosCount > 0) {
    escreverMensagem("🔒 Ainda faltam enigmas para resolver antes de escapar.");
  }
}

function escreverMensagem(msg) {
  mensagem.textContent = msg;
}
