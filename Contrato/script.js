function entrarContrato() {
  document.getElementById("tela-inicial").style.display = "none";
  document.getElementById("tela-contrato").style.display = "block";
}

function assinarJoao() {
  document.getElementById("assinatura-esquerda").textContent = "João Lucas";
}

function assinarRayssa() {
  document.getElementById("assinatura-direita").textContent = "Rayssa";
}

function mostrarDeclaracao() {
  const declaracao = document.getElementById("declaracao");
  declaracao.style.display =
    declaracao.style.display === "block" ? "none" : "block";
}

