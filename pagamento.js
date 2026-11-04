var subtotal = 3340;
var descontoPix = 0.15;

function formatarReais(valor) {
  return "R$ " + valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

var botoesMetodo = document.querySelectorAll(".pg-metodo-btn");
var conteudos = document.querySelectorAll(".pg-conteudo");
var metodoAtual = "pix";

function mostrarMetodo(metodo) {
  metodoAtual = metodo;

  for (var i = 0; i < conteudos.length; i++) {
    conteudos[i].classList.add("pg-escondido");
  }
  for (var j = 0; j < botoesMetodo.length; j++) {
    botoesMetodo[j].classList.remove("ativo");
    if (botoesMetodo[j].dataset.metodo == metodo) {
      botoesMetodo[j].classList.add("ativo");
    }
  }

  document.getElementById("conteudo-" + metodo).classList.remove("pg-escondido");

  var linhaDesconto = document.getElementById("linha-desconto");
  var total = document.getElementById("total");
  var textoPagar = document.getElementById("texto-pagar");

  if (metodo == "pix") {
    linhaDesconto.classList.remove("pg-escondido");
    total.textContent = formatarReais(subtotal - subtotal * descontoPix);
  } else {
    linhaDesconto.classList.add("pg-escondido");
    total.textContent = formatarReais(subtotal);
  }

  if (metodo == "debito" || metodo == "credito") {
    textoPagar.textContent = "Pagar";
  } else {
    textoPagar.textContent = "Pago";
  }
}

for (var a = 0; a < botoesMetodo.length; a++) {
  botoesMetodo[a].addEventListener("click", function () {
    mostrarMetodo(this.dataset.metodo);
  });
}

function configurarCartao(layout) {
  var numero = layout.querySelector("[data-campo='numero']");
  var nome = layout.querySelector("[data-campo='nome']");
  var validade = layout.querySelector("[data-campo='validade']");
  var cvv = layout.querySelector("[data-campo='cvv']");
  var cpf = layout.querySelector("[data-campo='cpf']");

  var cartaoNumero = layout.querySelector(".pg-cartao-numero");
  var cartaoNome = layout.querySelector(".pv-nome");
  var cartaoValidade = layout.querySelector(".pv-validade");

  numero.addEventListener("input", function () {
    var digitos = numero.value.replace(/\D/g, "").slice(0, 16);
    numero.value = digitos.replace(/(\d{4})(?=\d)/g, "$1 ");
    if (digitos == "") {
      cartaoNumero.textContent = "0000 •••• •••• 3333";
    } else {
      cartaoNumero.textContent = numero.value;
    }
  });

  nome.addEventListener("input", function () {
    if (nome.value.trim() == "") {
      cartaoNome.textContent = "A B NOME";
    } else {
      cartaoNome.textContent = nome.value.toUpperCase();
    }
  });

  validade.addEventListener("input", function () {
    var digitos = validade.value.replace(/\D/g, "").slice(0, 4);
    if (digitos.length > 2) {
      digitos = digitos.slice(0, 2) + "/" + digitos.slice(2);
    }
    validade.value = digitos;
    if (digitos == "") {
      cartaoValidade.textContent = "MM/AA";
    } else {
      cartaoValidade.textContent = digitos;
    }
  });

  cvv.addEventListener("input", function () {
    cvv.value = cvv.value.replace(/\D/g, "").slice(0, 3);
  });

  cpf.addEventListener("input", function () {
    var d = cpf.value.replace(/\D/g, "").slice(0, 11);
    if (d.length > 9) {
      d = d.slice(0, 3) + "." + d.slice(3, 6) + "." + d.slice(6, 9) + "-" + d.slice(9);
    } else if (d.length > 6) {
      d = d.slice(0, 3) + "." + d.slice(3, 6) + "." + d.slice(6);
    } else if (d.length > 3) {
      d = d.slice(0, 3) + "." + d.slice(3);
    }
    cpf.value = d;
  });
}

var layoutsCartao = document.querySelectorAll(".pg-cartao-layout");
for (var b = 0; b < layoutsCartao.length; b++) {
  configurarCartao(layoutsCartao[b]);
}

var listaParcelas = document.getElementById("lista-parcelas");

for (var p = 1; p <= 12; p++) {
  var rotulo = document.createElement("label");
  rotulo.className = "pg-parcela";
  if (p == 1) {
    rotulo.classList.add("marcada");
  }
  rotulo.innerHTML =
    '<input type="radio" name="parcelas" value="' + p + '"' + (p == 1 ? " checked" : "") + "> " +
    p + "x de " + formatarReais(subtotal / p);
  listaParcelas.appendChild(rotulo);

  rotulo.querySelector("input").addEventListener("change", function () {
    var todas = listaParcelas.querySelectorAll(".pg-parcela");
    for (var q = 0; q < todas.length; q++) {
      todas[q].classList.remove("marcada");
    }
    this.parentElement.classList.add("marcada");
  });
}

var botoesCopiar = document.querySelectorAll(".pg-copiar");
for (var c = 0; c < botoesCopiar.length; c++) {
  botoesCopiar[c].addEventListener("click", function () {
    var texto = document.getElementById(this.dataset.copiar).textContent;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(texto);
    }
    mostrarAviso("Código copiado!");
  });
}

var tempoPix = document.getElementById("tempo-pix");
var segundosPix = 23 * 3600 + 59 * 60 + 59;

function doisDigitos(n) {
  if (n < 10) {
    return "0" + n;
  }
  return "" + n;
}

function atualizarTempoPix() {
  var h = Math.floor(segundosPix / 3600);
  var m = Math.floor((segundosPix % 3600) / 60);
  var s = segundosPix % 60;
  tempoPix.textContent = doisDigitos(h) + ":" + doisDigitos(m) + ":" + doisDigitos(s);
  if (segundosPix > 0) {
    segundosPix = segundosPix - 1;
  }
}

atualizarTempoPix();
setInterval(atualizarTempoPix, 1000);

var qr = document.getElementById("qrcode");
var tamanho = 25;
var quadradinhos = "";

var cantos = [[0, 0], [18, 0], [0, 18]];

function estaNoCanto(x, y, canto) {
  return x >= canto[0] - 1 && x <= canto[0] + 7 && y >= canto[1] - 1 && y <= canto[1] + 7;
}

for (var y = 0; y < tamanho; y++) {
  for (var x = 0; x < tamanho; x++) {
    var preto = false;
    var noCanto = false;
    for (var z = 0; z < cantos.length; z++) {
      if (estaNoCanto(x, y, cantos[z])) {
        noCanto = true;
        var dx = x - cantos[z][0];
        var dy = y - cantos[z][1];
        if (dx >= 0 && dx <= 6 && dy >= 0 && dy <= 6) {
          var distancia = Math.max(Math.abs(dx - 3), Math.abs(dy - 3));
          preto = (distancia == 3 || distancia <= 1);
        }
      }
    }
    if (!noCanto) {
      preto = (x * 7 + y * 13 + x * y) % 3 == 0;
    }
    if (preto) {
      quadradinhos += '<rect x="' + x + '" y="' + y + '" width="1.02" height="1.02" fill="#111"/>';
    }
  }
}
qr.innerHTML = quadradinhos;

var barras = document.getElementById("barras");
var numerosBarras = "34191790010104351004791020150008898760000571410";
for (var n = 0; n < numerosBarras.length; n++) {
  var digito = parseInt(numerosBarras.charAt(n), 10);
  var preta = document.createElement("i");
  preta.style.width = (1 + (digito % 3)) + "px";
  barras.appendChild(preta);
  var branca = document.createElement("i");
  branca.className = "vazio";
  branca.style.width = (1 + ((digito + n) % 2)) + "px";
  barras.appendChild(branca);
}

document.getElementById("imprimir-boleto").addEventListener("click", function () {
  mostrarAviso("Boleto aberto para impressão");
});

document.getElementById("botao-pagar").addEventListener("click", function () {
  if (metodoAtual == "debito" || metodoAtual == "credito") {
    var campos = document.querySelectorAll("#conteudo-" + metodoAtual + " input[data-campo]");
    for (var k = 0; k < campos.length; k++) {
      if (campos[k].value.trim() == "") {
        mostrarAviso("Preencha todos os dados do cartão.");
        campos[k].focus();
        return;
      }
    }
  }
  mostrarAviso("Pagamento enviado com sucesso!");
});

mostrarMetodo("pix");
