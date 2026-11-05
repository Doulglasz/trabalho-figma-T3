function pdAviso(texto) {
  if (typeof mostrarAviso == "function") {
    mostrarAviso(texto);
  }
}

var pdBusca = document.getElementById("pd-busca");

if (pdBusca != null) {
  var pdAbas = document.querySelectorAll("#pd-abas button");
  var pdPedidos = document.querySelectorAll(".pd-pedido");
  var pdSecoes = document.querySelectorAll(".pd-secao");
  var pdFiltroAtual = "todos";

  function pdFiltrar() {
    var texto = pdBusca.value.trim().toLowerCase();
    var visiveis = 0;

    for (var i = 0; i < pdPedidos.length; i++) {
      var combinaFiltro = pdFiltroAtual == "todos" || pdPedidos[i].dataset.status == pdFiltroAtual;
      var combinaTexto = pdPedidos[i].textContent.toLowerCase().indexOf(texto) != -1;

      if (combinaFiltro && combinaTexto) {
        pdPedidos[i].classList.remove("pd-escondido");
        visiveis = visiveis + 1;
      } else {
        pdPedidos[i].classList.add("pd-escondido");
      }
    }

    for (var s = 0; s < pdSecoes.length; s++) {
      var pedidosDaSecao = pdSecoes[s].querySelectorAll(".pd-pedido");
      if (pedidosDaSecao.length == 0) {
        continue;
      }
      var algumVisivel = false;
      for (var p = 0; p < pedidosDaSecao.length; p++) {
        if (!pedidosDaSecao[p].classList.contains("pd-escondido")) {
          algumVisivel = true;
        }
      }
      if (algumVisivel) {
        pdSecoes[s].classList.remove("pd-escondido");
      } else {
        pdSecoes[s].classList.add("pd-escondido");
      }
    }

    var semResultado = document.getElementById("pd-sem-resultado");
    var historico = pdSecoes[1];
    if (visiveis == 0) {
      historico.classList.remove("pd-escondido");
      semResultado.classList.remove("pd-escondido");
      historico.querySelector(".pd-secao-linha").classList.add("pd-escondido");
    } else {
      semResultado.classList.add("pd-escondido");
      historico.querySelector(".pd-secao-linha").classList.remove("pd-escondido");
    }

    document.getElementById("pd-exibindo").textContent = "Exibindo " + visiveis + " de 13 pedidos realizados";
  }

  for (var a = 0; a < pdAbas.length; a++) {
    pdAbas[a].addEventListener("click", function () {
      for (var b = 0; b < pdAbas.length; b++) {
        pdAbas[b].classList.remove("ativo");
      }
      this.classList.add("ativo");
      pdFiltroAtual = this.dataset.filtro;
      pdFiltrar();
    });
  }

  pdBusca.addEventListener("input", pdFiltrar);

  document.getElementById("pd-periodo").addEventListener("change", function () {
    pdAviso("Período: " + this.value);
  });

  var pdBotoesDetalhes = document.querySelectorAll(".pd-detalhes-botao");
  for (var d = 0; d < pdBotoesDetalhes.length; d++) {
    pdBotoesDetalhes[d].addEventListener("click", function () {
      var painel = this.closest(".pd-pedido").querySelector(".pd-detalhes");
      painel.classList.toggle("pd-escondido");
      if (painel.classList.contains("pd-escondido")) {
        this.innerHTML = 'Ver Detalhes <i class="fa-solid fa-angle-right"></i>';
      } else {
        this.innerHTML = 'Ocultar Detalhes <i class="fa-solid fa-angle-up"></i>';
      }
    });
  }

  var pdBotoesComprar = document.querySelectorAll(".pd-comprar");
  for (var c = 0; c < pdBotoesComprar.length; c++) {
    pdBotoesComprar[c].addEventListener("click", function () {
      var contador = document.getElementById("contador-carrinho");
      if (contador != null) {
        contador.textContent = parseInt(contador.textContent, 10) + 1;
      }
      pdAviso("Produto adicionado ao carrinho");
    });
  }

  var pdBotoesAvaliar = document.querySelectorAll(".pd-avaliar");
  for (var v = 0; v < pdBotoesAvaliar.length; v++) {
    pdBotoesAvaliar[v].addEventListener("click", function () {
      pdAviso("Obrigado pela avaliação! +250 pts");
    });
  }

  var pdBotoesNota = document.querySelectorAll(".pd-nota");
  for (var n = 0; n < pdBotoesNota.length; n++) {
    pdBotoesNota[n].addEventListener("click", function () {
      pdAviso("Baixando nota fiscal");
    });
  }

  document.getElementById("pd-rastrear").addEventListener("click", function () {
    pdAviso("Em transporte: Cajamar - SP");
  });

  document.getElementById("pd-danfe").addEventListener("click", function () {
    pdAviso("Baixando DANFE / NF-e");
  });

  var pdBotoesSuporte = document.querySelectorAll(".pd-suporte-botao");
  for (var u = 0; u < pdBotoesSuporte.length; u++) {
    pdBotoesSuporte[u].addEventListener("click", function () {
      pdAviso("Abrindo atendimento");
    });
  }

  var pdBotoesPagina = document.querySelectorAll("#pd-paginas .numero");
  var pdAnterior = document.getElementById("pd-anterior");
  var pdProxima = document.getElementById("pd-proxima");
  var pdPaginaAtual = 1;

  function pdMostrarPagina(numero) {
    pdPaginaAtual = numero;
    for (var q = 0; q < pdBotoesPagina.length; q++) {
      pdBotoesPagina[q].classList.remove("ativo");
    }
    pdBotoesPagina[numero - 1].classList.add("ativo");
    pdAnterior.disabled = numero == 1;
    pdProxima.disabled = numero == pdBotoesPagina.length;
  }

  for (var g = 0; g < pdBotoesPagina.length; g++) {
    pdBotoesPagina[g].addEventListener("click", function () {
      pdMostrarPagina(parseInt(this.textContent, 10));
    });
  }

  pdAnterior.addEventListener("click", function () {
    pdMostrarPagina(pdPaginaAtual - 1);
  });

  pdProxima.addEventListener("click", function () {
    pdMostrarPagina(pdPaginaAtual + 1);
  });

  pdMostrarPagina(1);
}
