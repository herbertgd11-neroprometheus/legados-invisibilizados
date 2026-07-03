function sortearInspiração() {
  const indice = Math.floor(Math.random() * mensagens.length);

  document.getElementById("mensagem").innerText =
    mensagens[indice].inspiracao;
}

document.getElementById("sortear").addEventListener("click", sortearInspiração);

sortearInspiração();
