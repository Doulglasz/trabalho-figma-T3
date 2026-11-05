var ctPrecoExpress = 48;
var ctPrecoSedex = 29.9;
var ctDescontoPix = 0.15;
var ctCupomAtivo = true;

var ctLista = document.getElementById("ct-lista");
var ctVazio = document.getElementById("ct-vazio");
var ctCupomCaixa = document.getElementById("ct-cupom-ativo");
var ctContador = document.getElementById("contador-carrinho");

function ctFormatar(valor) {
  return "R$ " + valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function ctAviso(texto) {
  if (typeof mostrarAviso == "function") {
    mostrarAviso(texto);
  }
}

function ctFreteEscolhido() {
  return document.querySelector("input[name='frete']:checked").value;
}

function ctAtualizar() {
  var itens = ctLista.querySelectorAll(".ct-item");
  var subtotal = 0;
  var quantidadeTotal = 0;

  for (var i = 0; i < itens.length; i++) {
    var quantidade = parseInt(itens[i].querySelector(".ct-num").textContent, 10);
    var preco = Number(itens[i].dataset.preco);
    var antigo = Number(itens[i].dataset.antigo);

    itens[i].querySelector(".ct-preco").textContent = ctFormatar(preco * quantidade);
    if (antigo > 0) {
      itens[i].querySelector(".ct-antigo").textContent = ctFormatar(antigo * quantidade);
    }

    subtotal = subtotal + preco * quantidade;
    quantidadeTotal = quantidadeTotal + quantidade;
  }

  var frete = 0;
  var textoFrete = "";
  var textoExpress = "";

  if (ctCupomAtivo) {
    textoExpress = '<s>' + ctFormatar(ctPrecoExpress) + '</s><strong class="ct-gratis">GRÁTIS</strong>';
  } else {
    textoExpress = "<strong>" + ctFormatar(ctPrecoExpress) + "</strong>";
  }
  document.getElementById("ct-express-preco").innerHTML = textoExpress;

  if (itens.length == 0) {
    textoFrete = "<strong>" + ctFormatar(0) + "</strong>";
  } else if (ctFreteEscolhido() == "sedex") {
    frete = ctPrecoSedex;
    textoFrete = "<strong>" + ctFormatar(ctPrecoSedex) + "</strong>";
  } else if (ctCupomAtivo) {
    textoFrete = textoExpress;
  } else {
    frete = ctPrecoExpress;
    textoFrete = textoExpress;
  }

  var total = subtotal + frete;
  var totalPix = subtotal - subtotal * ctDescontoPix + frete;

  document.getElementById("ct-subtotal").textContent = ctFormatar(subtotal);
  document.getElementById("ct-frete").innerHTML = textoFrete;
  document.getElementById("ct-total").textContent = ctFormatar(total);
  document.getElementById("ct-pix").textContent = ctFormatar(totalPix);
  document.getElementById("ct-parcelas").innerHTML = "10x de " + ctFormatar(total / 10) + "<br>sem juros";

  var textoSelecionados = itens.length + " selecionados";
  if (itens.length == 1) {
    textoSelecionados = "1 selecionado";
  }
  document.getElementById("ct-selecionados").textContent = textoSelecionados;

  if (ctContador != null) {
    ctContador.textContent = quantidadeTotal;
  }

  if (itens.length == 0) {
    ctLista.classList.add("ct-escondido");
    ctVazio.classList.remove("ct-escondido");
  } else {
    ctLista.classList.remove("ct-escondido");
    ctVazio.classList.add("ct-escondido");
  }
}

ctLista.addEventListener("click", function (evento) {
  var botao = evento.target.closest("button");
  if (botao == null) {
    return;
  }

  var item = botao.closest(".ct-item");
  var numero = item.querySelector(".ct-num");
  var quantidade = parseInt(numero.textContent, 10);

  if (botao.classList.contains("ct-mais")) {
    if (quantidade < 12) {
      numero.textContent = quantidade + 1;
    } else {
      ctAviso("Quantidade máxima por pedido: 12");
    }
  }

  if (botao.classList.contains("ct-menos") && quantidade > 1) {
    numero.textContent = quantidade - 1;
  }

  if (botao.classList.contains("ct-remover")) {
    item.remove();
    ctAviso("Item removido do carrinho");
  }

  ctAtualizar();
});

document.getElementById("ct-limpar").addEventListener("click", function () {
  var itens = ctLista.querySelectorAll(".ct-item");
  for (var i = 0; i < itens.length; i++) {
    itens[i].remove();
  }
  ctAtualizar();
});

var ctOpcoesFrete = document.querySelectorAll("input[name='frete']");
for (var f = 0; f < ctOpcoesFrete.length; f++) {
  ctOpcoesFrete[f].addEventListener("change", ctAtualizar);
}

document.getElementById("ct-aplicar").addEventListener("click", function () {
  var campo = document.getElementById("ct-cupom");
  var codigo = campo.value.trim().toUpperCase();

  if (codigo == "") {
    ctAviso("Digite um cupom.");
  } else if (codigo == "NEXUSPRO10") {
    ctCupomAtivo = true;
    ctCupomCaixa.classList.remove("ct-escondido");
    campo.value = "";
    ctAviso("Cupom aplicado!");
    ctAtualizar();
  } else {
    ctAviso("Cupom inválido.");
  }
});

var ctCampoCep = document.getElementById("ct-cep");

ctCampoCep.addEventListener("input", function () {
  var digitos = ctCampoCep.value.replace(/\D/g, "").slice(0, 8);
  if (digitos.length > 5) {
    digitos = digitos.slice(0, 5) + "-" + digitos.slice(5);
  }
  ctCampoCep.value = digitos;
});

document.getElementById("ct-calcular").addEventListener("click", function () {
  var digitos = ctCampoCep.value.replace(/\D/g, "");
  if (digitos.length < 8) {
    ctAviso("Digite um CEP com 8 números.");
  } else {
    ctAviso("Frete calculado para o CEP " + ctCampoCep.value);
  }
});

document.getElementById("ct-continuar").addEventListener("click", function (evento) {
  if (ctLista.querySelectorAll(".ct-item").length == 0) {
    evento.preventDefault();
    ctAviso("Seu carrinho está vazio.");
  }
});

ctAtualizar();
