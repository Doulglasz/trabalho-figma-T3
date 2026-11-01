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
