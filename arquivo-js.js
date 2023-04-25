
function selecionaNaipeOuros() {
  var noipe = "";
  noipe = "ouros";
}

function selecionaNaipeCopas() {
  var noipe = "";
  noipe = "copas";
}

function selecionaNaipePaus() {
  var noipe = "";
  noipe = "paus";
}

function selecionaNaipeEspadas() {
  var noipe = "";
  noipe = "espadas";
}
// variável global para armazenar o naipe selecionado


function enviarFormulario() {
  // Obter os valores dos campos do formulário
  var nome = document.getElementById("nome").value;
  var naipe = noipe;
  alert("O naipe selecionado foi: " + naipe);

  var numero = document.getElementById("numero").value;
  var bebida = document.getElementById("bebida").value;
  
  // Criar uma nova linha para a tabela
  var novaLinha = document.createElement("tr");
  var novaCelulaNome = document.createElement("td");
  var novaCelulaBebida = document.createElement("td");
  var novaCelulaQuantidade = document.createElement("td");
  novaCelulaNome.innerHTML = nome;
  novaCelulaBebida.innerHTML = bebida;
  novaCelulaQuantidade.innerHTML = numero;
  novaLinha.appendChild(novaCelulaNome);
  novaLinha.appendChild(novaCelulaBebida);
  novaLinha.appendChild(novaCelulaQuantidade);
  
  // Obter a tabela correta com base no naipe selecionado
  var tabela = document.getElementById("tabela-" + naipe);
  var tbody = tabela.querySelector("tbody");
  
  // Adicionar a nova linha à tabela
  tbody.appendChild(novaLinha);
}




// função que aumenta o número
function aumentarNumero() {
  var numero = parseInt(document.getElementById("numero").value);
  document.getElementById("numero").value = numero + 1;
}

// função que diminui o número
function diminuirNumero() {
  var numero = parseInt(document.getElementById("numero").value);
  if (numero > 0) {
    document.getElementById("numero").value = numero - 1;
  }
}
