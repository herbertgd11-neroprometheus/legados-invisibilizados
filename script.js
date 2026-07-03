function sortearInspiracao() {
  const indice = Math.floor(Math.random() * mensagens.length);

  document.getElementById("mensagem").innerText =
    mensagens[indice];
}

document.getElementById("sortear").addEventListener("click", sortearInspiracao);

sortearInspiracao();
