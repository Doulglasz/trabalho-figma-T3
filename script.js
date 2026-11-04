var totalCarrinho = 0;

function mostrarAviso(texto) {
  var aviso = document.getElementById("aviso");
  if (aviso == null) {
    return;
  }
  aviso.textContent = texto;
  aviso.classList.add("visivel");
  setTimeout(function () {
    aviso.classList.remove("visivel");
  }, 2500);
}

function adicionarAoCarrinho(quantidade) {
  var contador = document.getElementById("contador-carrinho");
  totalCarrinho = totalCarrinho + quantidade;
  if (contador != null) {
    contador.textContent = totalCarrinho;
  }
  mostrarAviso("Produto adicionado ao carrinho");
}

var botoesCarrinho = document.querySelectorAll(".botao-carrinho");
for (var i = 0; i < botoesCarrinho.length; i++) {
  botoesCarrinho[i].addEventListener("click", function () {
    adicionarAoCarrinho(1);
  });
}

var botoesFavorito = document.querySelectorAll(".favorito");
for (var j = 0; j < botoesFavorito.length; j++) {
  botoesFavorito[j].addEventListener("click", function () {
    this.classList.toggle("ativo");
  });
}

var formLogin = document.getElementById("form-login");
if (formLogin != null) {
  var campoEmail = document.getElementById("email");
  var campoSenha = document.getElementById("senha");
  var botaoOlho = document.getElementById("mostrar-senha");
  var erro = document.getElementById("erro-login");

  botaoOlho.addEventListener("click", function () {
    if (campoSenha.type == "password") {
      campoSenha.type = "text";
      botaoOlho.textContent = "Ocultar";
    } else {
      campoSenha.type = "password";
      botaoOlho.textContent = "Mostrar";
    }
  });

  formLogin.addEventListener("submit", function (evento) {
    evento.preventDefault();
    if (campoEmail.value == "" || campoSenha.value == "") {
      erro.textContent = "Preencha o e-mail e a senha para entrar.";
      return;
    }
    erro.textContent = "";
    window.location.href = "index.html";
  });
}

var cronometro = document.getElementById("cronometro");
if (cronometro != null) {
  var segundosRestantes = 23 * 3600 + 59 * 60 + 59;

  function atualizarCronometro() {
    var horas = Math.floor(segundosRestantes / 3600);
    var minutos = Math.floor((segundosRestantes % 3600) / 60);
    var segundos = segundosRestantes % 60;
    cronometro.textContent = horas + " h " + minutos + " m " + segundos + " s";
    if (segundosRestantes > 0) {
      segundosRestantes = segundosRestantes - 1;
    }
  }

  atualizarCronometro();
  setInterval(atualizarCronometro, 1000);
}

var gradeCatalogo = document.getElementById("grade-catalogo");
if (gradeCatalogo != null) {
  var caixas = document.querySelectorAll(".filtros input[type='checkbox']");
  var botaoAplicar = document.getElementById("aplicar-filtros");
  var botaoLimpar = document.getElementById("limpar-filtros");
  var selectOrdem = document.getElementById("ordem");
  var botaoGrade = document.getElementById("ver-grade");
  var botaoLista = document.getElementById("ver-lista");

  function contarFiltros() {
    var marcados = 0;
    for (var k = 0; k < caixas.length; k++) {
      if (caixas[k].checked) {
        marcados = marcados + 1;
      }
    }
    botaoAplicar.textContent = "Aplicar Filtros (" + marcados + ")";
  }

  for (var m = 0; m < caixas.length; m++) {
    caixas[m].addEventListener("change", contarFiltros);
  }

  botaoLimpar.addEventListener("click", function () {
    for (var n = 0; n < caixas.length; n++) {
      caixas[n].checked = false;
    }
    contarFiltros();
  });

  botaoAplicar.addEventListener("click", function () {
    mostrarAviso("Filtros aplicados");
  });

  selectOrdem.addEventListener("change", function () {
    var cards = Array.from(gradeCatalogo.children);
    if (selectOrdem.value == "menor") {
      cards.sort(function (a, b) {
        return a.dataset.preco - b.dataset.preco;
      });
    } else if (selectOrdem.value == "maior") {
      cards.sort(function (a, b) {
        return b.dataset.preco - a.dataset.preco;
      });
    } else {
      cards.sort(function (a, b) {
        return a.dataset.ordem - b.dataset.ordem;
      });
    }
    for (var p = 0; p < cards.length; p++) {
      gradeCatalogo.appendChild(cards[p]);
    }
  });

  botaoLista.addEventListener("click", function () {
    gradeCatalogo.classList.add("lista");
    botaoLista.classList.add("ativo");
    botaoGrade.classList.remove("ativo");
  });

  botaoGrade.addEventListener("click", function () {
    gradeCatalogo.classList.remove("lista");
    botaoGrade.classList.add("ativo");
    botaoLista.classList.remove("ativo");
  });

  var botoesPagina = document.querySelectorAll(".paginacao .numero");
  for (var q = 0; q < botoesPagina.length; q++) {
    botoesPagina[q].addEventListener("click", function () {
      for (var r = 0; r < botoesPagina.length; r++) {
        botoesPagina[r].classList.remove("ativo");
      }
      this.classList.add("ativo");
    });
  }

  contarFiltros();
}

var imagemPrincipal = document.getElementById("imagem-principal");
if (imagemPrincipal != null) {
  var miniaturas = document.querySelectorAll(".miniaturas button");
  for (var s = 0; s < miniaturas.length; s++) {
    miniaturas[s].addEventListener("click", function () {
      for (var t = 0; t < miniaturas.length; t++) {
        miniaturas[t].classList.remove("ativo");
      }
      this.classList.add("ativo");
      imagemPrincipal.src = this.querySelector("img").src;
    });
  }

  var quantidade = 1;
  var textoQuantidade = document.getElementById("quantidade");

  document.getElementById("menos").addEventListener("click", function () {
    if (quantidade > 1) {
      quantidade = quantidade - 1;
      textoQuantidade.textContent = quantidade;
    }
  });

  document.getElementById("mais").addEventListener("click", function () {
    if (quantidade < 12) {
      quantidade = quantidade + 1;
      textoQuantidade.textContent = quantidade;
    }
  });

  document.getElementById("adicionar").addEventListener("click", function () {
    adicionarAoCarrinho(quantidade);
  });

  document.getElementById("comprar-agora").addEventListener("click", function () {
    mostrarAviso("Compra iniciada");
  });

  document.getElementById("calcular-frete").addEventListener("click", function () {
    var cep = document.getElementById("cep").value;
    var resultado = document.getElementById("frete-resultado");
    if (cep.length < 8) {
      resultado.textContent = "Digite um CEP com 8 números.";
    } else {
      resultado.textContent = "Frete grátis para o CEP " + cep + ".";
    }
  });

  var botoesFiltro = document.querySelectorAll(".filtros-avaliacao button");
  var avaliacoes = document.querySelectorAll(".avaliacao");

  for (var u = 0; u < botoesFiltro.length; u++) {
    botoesFiltro[u].addEventListener("click", function () {
      for (var v = 0; v < botoesFiltro.length; v++) {
        botoesFiltro[v].classList.remove("ativo");
      }
      this.classList.add("ativo");
      var tipo = this.dataset.tipo;
      for (var w = 0; w < avaliacoes.length; w++) {
        var mostrar = true;
        if (tipo == "fotos" && avaliacoes[w].dataset.fotos != "sim") {
          mostrar = false;
        }
        if (tipo == "melhores" && avaliacoes[w].dataset.nota != "5") {
          mostrar = false;
        }
        if (mostrar) {
          avaliacoes[w].style.display = "";
        } else {
          avaliacoes[w].style.display = "none";
        }
      }
    });
  }

  document.getElementById("carregar-mais").addEventListener("click", function () {
    var escondidas = document.querySelectorAll(".avaliacao.escondida");
    for (var x = 0; x < escondidas.length; x++) {
      escondidas[x].classList.remove("escondida");
    }
    this.style.display = "none";
    document.getElementById("exibindo").textContent = "Exibindo 5 de 128 avaliações";
  });
}

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
