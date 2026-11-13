var urlImagem = "https://encrypted-tbn0.gstatic.com/images?q=tbn:";

var produtos = {
  "0": {
    nome: "Placa de Vídeo ASUS TUF Gaming GeForce RTX 4070 Super OC Edition 12GB GDDR6X",
    curto: "RTX 4070 Super TUF",
    categoria: "Placa de Vídeo",
    preco: 3899,
    antigo: 4899,
    imagens: [urlImagem + "ANd9GcQFQWc41G445RJ0vmTlZcCUZctfqBrZKe8WauanuJgnMw&s=10"]
  },
  "1": {
    nome: "Placa de Vídeo ASUS TUF Gaming GeForce RTX 4070 Ti 12GB GDDR6X",
    curto: "RTX 4070 Ti TUF",
    categoria: "Placa de Vídeo",
    preco: 5354.15,
    antigo: 6299,
    estoque: 12,
    parcelas: "12x de R$ 524,91 sem juros",
    imagens: [
      urlImagem + "ANd9GcQFQWc41G445RJ0vmTlZcCUZctfqBrZKe8WauanuJgnMw&s=10",
      urlImagem + "ANd9GcQAEO6YAcffgY2S5BPg7knUDL8O2gIyNgtMfF9Dn_Qi0Q&s=10",
      urlImagem + "ANd9GcQhJjqTYUCW7oPGEcG0ugO1E3NY801FbNQuIIuK50j_6g&s=10"
    ],
    specs: [
      ["Processador Gráfico", "NVIDIA GeForce RTX 4070 Ti"],
      ["Núcleos CUDA", "7680 Cores"],
      ["Capacidade de Memória", "12 GB"],
      ["Tipo de Memória", "GDDR6X"],
      ["Velocidade de Memória", "21 Gbps"],
      ["Interface de Barramento", "192-bit"],
      ["Padrão de Barramento", "PCI Express 4.0 16x"],
      ["Consumo Máximo", "285W"],
      ["Fonte Recomendada (PSU)", "700W ou superior"],
      ["Tecnologias", "DLSS 3 e Ray Tracing"],
      ["Resolução Máxima Digital", "7680 x 4320 (8K HDR @ 60Hz)"]
    ]
  },
  "2": {
    nome: "Processador AMD Ryzen 7 7800X3D 4.2GHz (5.0GHz Turbo) 8-Core 16-Threads AM5",
    curto: "Ryzen 7 7800X3D",
    categoria: "Processador",
    preco: 3299,
    antigo: 0,
    estoque: 8,
    parcelas: "10x de R$ 329,90 sem juros",
    imagens: [urlImagem + "ANd9GcSZbs5ZuTePmKq9LkqB0o3jY_HN1sZ8An9gVXFux0AuHg&s"],
    specs: [
      ["Modelo", "AMD Ryzen 7 7800X3D"],
      ["Núcleos", "8 Cores"],
      ["Threads", "16 Threads"],
      ["Clock Base", "4.2 GHz"],
      ["Clock Máximo (Turbo)", "5.0 GHz"],
      ["Cache L3", "96 MB (3D V-Cache)"],
      ["TDP", "120W"],
      ["Socket", "AM5"],
      ["Memória Suportada", "DDR5"],
      ["Gráficos Integrados", "AMD Radeon Graphics"],
      ["Cooler", "Não incluso"]
    ]
  },
  "3": {
    nome: "Memória Corsair Vengeance RGB 32GB (2×16GB) DDR5 6000MHz CL30 Black",
    curto: "Corsair Vengeance 32GB DDR5",
    categoria: "Memória RAM",
    preco: 899.9,
    antigo: 1199,
    estoque: 15,
    parcelas: "8x de R$ 132,34 sem juros",
    imagens: [urlImagem + "ANd9GcQfWtZWZiq981cVihI2C1MyjEP1LuR7WpmjSaTe5_ciLw&s=10"],
    specs: [
      ["Capacidade Total", "32 GB (2 x 16 GB)"],
      ["Tipo de Memória", "DDR5"],
      ["Velocidade", "6000 MHz"],
      ["Latência", "CL30"],
      ["Formato", "DIMM 288 pinos"],
      ["Iluminação", "RGB"],
      ["Cor", "Preto"],
      ["Aplicação", "Desktop"]
    ]
  },
  "4": {
    nome: "SSD Kingston KC3000 2TB M.2 2280 PCIe 4.0 NVMe 7000MB/s",
    curto: "SSD Kingston KC3000 2TB",
    categoria: "Armazenamento",
    preco: 1079.2,
    antigo: 1349,
    estoque: 24,
    parcelas: "10x de R$ 126,96 sem juros",
    imagens: [urlImagem + "ANd9GcRw06YM53uW47tAyobjyGhefE_Xfcig0dLGBsvoBs_1Zw&s=10"],
    specs: [
      ["Capacidade", "2 TB"],
      ["Formato", "M.2 2280"],
      ["Interface", "PCIe 4.0 x4 NVMe"],
      ["Leitura Sequencial", "Até 7.000 MB/s"],
      ["Gravação Sequencial", "Até 7.000 MB/s"],
      ["Tipo de Memória", "NAND 3D TLC"],
      ["Durabilidade", "2000 TBW"],
      ["Garantia", "5 anos"]
    ]
  },
  "5": {
    nome: "Placa-Mãe ASUS ROG Strix B650E-F Gaming Wi-Fi, AMD AM5, ATX, DDR5",
    curto: "ROG Strix B650E-F",
    categoria: "Placa-mãe",
    preco: 2124.15,
    antigo: 2499,
    estoque: 9,
    parcelas: "10x de R$ 249,90 sem juros",
    imagens: [urlImagem + "ANd9GcSQ1kjdqLQsMybhMAqlniXfY7OFgEjAY3Gwun6jjIkr6Q&s=10"],
    specs: [
      ["Chipset", "AMD B650"],
      ["Socket", "AM5"],
      ["Formato", "ATX"],
      ["Slots de Memória", "4 x DDR5"],
      ["Slot Gráfico", "PCI Express 5.0 x16"],
      ["Armazenamento", "3 x M.2"],
      ["Rede sem fio", "Wi-Fi 6E"],
      ["Rede cabeada", "Ethernet 2.5 Gb"]
    ]
  },
  "6": {
    nome: "Fonte Corsair RM850x 850W, 80 Plus Gold, Totalmente Modular",
    curto: "Corsair RM850x 850W",
    categoria: "Fonte",
    preco: 977.5,
    antigo: 1150,
    estoque: 6,
    parcelas: "10x de R$ 115,00 sem juros",
    imagens: [urlImagem + "ANd9GcRmHnAHkRhcOPOKHus2voxksh8gw10WDDXe5Y08BFG0nw&s=10"],
    specs: [
      ["Potência", "850W"],
      ["Certificação", "80 Plus Gold"],
      ["Modularidade", "Totalmente modular"],
      ["Formato", "ATX"],
      ["Ventoinha", "135 mm com modo Zero RPM"],
      ["Capacitores", "105°C"],
      ["Garantia", "10 anos"]
    ]
  },
  "7": {
    nome: "Fonte Corsair 750W 80 Plus Gold",
    curto: "Fonte Corsair 750W Gold",
    categoria: "Fonte",
    preco: 649,
    antigo: 0,
    imagens: [urlImagem + "ANd9GcT3EDjfjSDDjF7e2NHa9VMBULMOlmSN49QO0wjMbCo8CA&s=10"]
  },
  "8": {
    nome: "Suporte Anti-Sag Alumínio para Placa de Vídeo",
    curto: "Suporte Anti-Sag Alumínio",
    categoria: "Acessório",
    preco: 69.9,
    antigo: 0,
    imagens: [urlImagem + "ANd9GcRKlvVmBXYdOvFXtM2BwFTnOJdXtiZ98vMPGhKrx8UQ8Q&s"]
  }
};

function lerCarrinho() {
  var guardado = localStorage.getItem("carrinho");
  if (guardado == null) {
    return [];
  }
  return JSON.parse(guardado);
}

function salvarCarrinho(lista) {
  localStorage.setItem("carrinho", JSON.stringify(lista));
}

function atualizarContador() {
  var contador = document.getElementById("contador-carrinho");
  if (contador == null) {
    return;
  }
  var lista = lerCarrinho();
  var total = 0;
  for (var i = 0; i < lista.length; i++) {
    total = total + lista[i].qtd;
  }
  contador.textContent = total;
}

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

function adicionarAoCarrinho(quantidade, id) {
  if (produtos[id] == undefined) {
    return;
  }
  var lista = lerCarrinho();
  var achou = false;
  var texto = "Produto adicionado ao carrinho";

  for (var i = 0; i < lista.length; i++) {
    if (lista[i].id == id) {
      achou = true;
      lista[i].qtd = lista[i].qtd + quantidade;
      if (lista[i].qtd > 12) {
        lista[i].qtd = 12;
        texto = "Quantidade máxima por pedido: 12";
      }
    }
  }

  if (!achou) {
    lista.push({ id: id, qtd: quantidade });
  }

  salvarCarrinho(lista);
  atualizarContador();
  mostrarAviso(texto);
}

var botoesCarrinho = document.querySelectorAll(".botao-carrinho");
for (var i = 0; i < botoesCarrinho.length; i++) {
  botoesCarrinho[i].addEventListener("click", function () {
    if (this.dataset.id != undefined) {
      adicionarAoCarrinho(1, this.dataset.id);
    }
  });
}

atualizarContador();

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

var formCadastro = document.getElementById("form-cadastro");
if (formCadastro != null) {
  var cadNome = document.getElementById("nome");
  var cadEmail = document.getElementById("email");
  var cadCpf = document.getElementById("cpf");
  var cadSenha = document.getElementById("senha");
  var cadConfirmar = document.getElementById("confirmar-senha");
  var cadMostrar = document.getElementById("mostrar-senhas");
  var cadTermos = document.getElementById("termos");
  var cadErro = document.getElementById("erro-cadastro");

  cadCpf.addEventListener("input", function () {
    var d = cadCpf.value.replace(/\D/g, "").slice(0, 11);
    if (d.length > 9) {
      d = d.slice(0, 3) + "." + d.slice(3, 6) + "." + d.slice(6, 9) + "-" + d.slice(9);
    } else if (d.length > 6) {
      d = d.slice(0, 3) + "." + d.slice(3, 6) + "." + d.slice(6);
    } else if (d.length > 3) {
      d = d.slice(0, 3) + "." + d.slice(3);
    }
    cadCpf.value = d;
  });

  cadMostrar.addEventListener("change", function () {
    if (cadMostrar.checked) {
      cadSenha.type = "text";
      cadConfirmar.type = "text";
    } else {
      cadSenha.type = "password";
      cadConfirmar.type = "password";
    }
  });

  formCadastro.addEventListener("submit", function (evento) {
    evento.preventDefault();
    var nome = cadNome.value.trim();
    var email = cadEmail.value.trim();
    var cpf = cadCpf.value.replace(/\D/g, "");

    if (nome.length < 3) {
      cadErro.textContent = "Digite seu nome completo.";
      cadNome.focus();
      return;
    }
    if (email.indexOf("@") == -1 || email.indexOf(".") == -1) {
      cadErro.textContent = "Digite um e-mail válido.";
      cadEmail.focus();
      return;
    }
    if (cpf.length != 11) {
      cadErro.textContent = "Digite um CPF com 11 números.";
      cadCpf.focus();
      return;
    }
    if (cadSenha.value.length < 6) {
      cadErro.textContent = "A senha precisa ter pelo menos 6 caracteres.";
      cadSenha.focus();
      return;
    }
    if (cadSenha.value != cadConfirmar.value) {
      cadErro.textContent = "As senhas não são iguais.";
      cadConfirmar.focus();
      return;
    }
    if (!cadTermos.checked) {
      cadErro.textContent = "Aceite os termos de uso para continuar.";
      return;
    }

    cadErro.textContent = "";
    localStorage.setItem("usuario", JSON.stringify({ nome: nome, email: email }));
    mostrarAviso("Conta criada com sucesso!");
    setTimeout(function () {
      window.location.href = "login.html";
    }, 1500);
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

function mostrarProduto(id) {
  var produto = produtos[id];

  document.title = produto.nome + " - Techno Store";
  document.querySelector(".produto-info h1").textContent = produto.nome;

  imagemPrincipal.src = produto.imagens[0];
  imagemPrincipal.alt = produto.curto;

  var botoesMiniatura = document.querySelectorAll(".miniaturas button");
  for (var i = 0; i < botoesMiniatura.length; i++) {
    if (produto.imagens[i] == undefined) {
      botoesMiniatura[i].style.display = "none";
    } else {
      botoesMiniatura[i].querySelector("img").src = produto.imagens[i];
      botoesMiniatura[i].querySelector("img").alt = "Vista " + (i + 1);
    }
  }

  var precoAntigo = document.querySelector(".produto-info .preco-antigo");
  if (produto.antigo > 0) {
    precoAntigo.innerHTML = "De " + formatarReais(produto.antigo) + ' <span class="selo selo-vermelho">Economize ' + formatarReais(produto.antigo - produto.preco) + "</span>";
  } else {
    precoAntigo.style.display = "none";
  }

  document.querySelector(".produto-info .caixa-preco .preco-atual").innerHTML = formatarReais(produto.preco) + " <small>À VISTA NO PIX</small>";
  document.querySelector(".produto-info .caixa-preco p").textContent = "No cartão de crédito em até " + produto.parcelas;
  document.querySelector(".estoque").textContent = "Em Estoque: " + produto.estoque + " unidades no CD São Paulo - Envio em até 24h";

  var tabela = document.querySelector(".tabela-specs");
  tabela.innerHTML = "";
  for (var j = 0; j < produto.specs.length; j++) {
    var linha = document.createElement("div");
    var nomeSpec = document.createElement("span");
    var valorSpec = document.createElement("strong");
    nomeSpec.textContent = produto.specs[j][0];
    valorSpec.textContent = produto.specs[j][1];
    linha.appendChild(nomeSpec);
    linha.appendChild(valorSpec);
    tabela.appendChild(linha);
  }

  var itemCombo = document.querySelector(".combo-item");
  itemCombo.innerHTML = '<div class="imagem"><img src="' + produto.imagens[0] + '" alt="' + produto.curto + '"></div>' + produto.curto + "<br><strong>" + formatarReais(produto.preco) + "</strong>";

  var somaCombo = produto.preco + produtos["7"].preco + produtos["8"].preco;
  document.querySelector(".combo-total .preco-atual").textContent = formatarReais(somaCombo * 0.95);
  document.querySelector(".combo-total .preco-antigo").textContent = "De " + formatarReais(somaCombo);
}

if (imagemPrincipal != null) {
  var idProduto = new URLSearchParams(window.location.search).get("id");
  if (idProduto == null || produtos[idProduto] == undefined || produtos[idProduto].specs == undefined) {
    idProduto = "0";
  }
  if (idProduto != "0") {
    mostrarProduto(idProduto);
  }

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
    adicionarAoCarrinho(quantidade, idProduto);
  });

  document.getElementById("comprar-agora").addEventListener("click", function () {
    adicionarAoCarrinho(quantidade, idProduto);
  });

  document.getElementById("comprar-combo").addEventListener("click", function () {
    adicionarAoCarrinho(1, idProduto);
    adicionarAoCarrinho(1, "7");
    adicionarAoCarrinho(1, "8");
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
