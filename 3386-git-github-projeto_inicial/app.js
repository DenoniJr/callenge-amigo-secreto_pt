let amigos = [];
let sorteados = [];

function adicionarAmigo() {
  const input = document.getElementById('amigo');
  const nome = input.value.trim();

  if (nome === "") {
    alert("Digite um nome válido.");
    input.focus();
    return;
  }

  if (amigos.includes(nome)) {
    alert("Esse nome já foi adicionado.");
    input.value = "";
    input.focus();
    return;
  }

  amigos.push(nome);
  input.value = "";
  input.focus();
  exibirListaAmigos();
}

function exibirListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = "";

  amigos.forEach((nome) => {
    const li = document.createElement('li');
    li.textContent = nome;
    lista.appendChild(li);
  });
}

function iniciarSorteio() {
  if (amigos.length < 2) {
    alert("Adicione pelo menos dois amigos para iniciar o sorteio.");
    return;
  }

  document.getElementById('botaoSortearAmigo').style.display = 'none';
  document.getElementById('botaoSortearProximo').style.display = 'inline-block';
  sortearProximo();
}

function sortearProximo() {
  if (amigos.length <= 1) {
    finalizarSorteio();
    return;
  }

  const sorteadoIndex = Math.floor(Math.random() * amigos.length);
  const nomeSorteado = amigos[sorteadoIndex];

  sorteados.push(nomeSorteado);
  amigos.splice(sorteadoIndex, 1);

  const resultado = document.getElementById('resultado');
  const li = document.createElement('li');
  li.textContent = `${nomeSorteado} 🎉`;
  resultado.appendChild(li);

  exibirListaAmigos();

  if (amigos.length === 1) {
    finalizarSorteio();
  }
}

function finalizarSorteio() {
  const resultado = document.getElementById('resultado');

  if (amigos.length === 1) {
    const li = document.createElement('li');
    li.textContent = `${amigos[0]} 🎉`;
    resultado.appendChild(li);
  }

  document.getElementById('botaoSortearProximo').style.display = 'none';
  document.getElementById('botaoReiniciar').style.display = 'inline-block';
}

function reiniciarJogo() {
  amigos = [];
  sorteados = [];
  document.getElementById('listaAmigos').innerHTML = "";
  document.getElementById('resultado').innerHTML = "";
  document.getElementById('amigo').value = "";
  document.getElementById('botaoSortearAmigo').style.display = 'inline-block';
  document.getElementById('botaoSortearProximo').style.display = 'none';
  document.getElementById('botaoReiniciar').style.display = 'none';
}

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById('amigo').focus();
});