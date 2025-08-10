const amigos = [];

function adicionarAmigo() {
  const input = document.getElementById("amigo");
  const nome = input.value.trim();

  if (nome !== "") {
    amigos.push(nome);
    atualizarLista();
    input.value = "";
    input.focus();
  }
}

function atualizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach((nome, index) => {
    const item = document.createElement("li");
    item.textContent = `${index + 1}. ${nome}`;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    const aviso = document.createElement("li");
    aviso.textContent = "Digite um nome, por favor.";
    resultado.appendChild(aviso);
    return;
  }

  const sorteado = amigos[Math.floor(Math.random() * amigos.length)];

  const item = document.createElement("li");
  item.textContent = 'O seu amigo secreto é: ${sorteado}!';
  resultado.appendChild(item);
}
