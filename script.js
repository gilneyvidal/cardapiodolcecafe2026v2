// ===========================
// LISTA DE SETORES DO HOSPITAL
// ===========================
const setoresHospital = [
  "Recepção",
  "Enfermaria – Adulto",
  "Enfermaria – Infantil",
  "UTI Adulto",
  "UTI Infantil",
  "Centro Cirúrgico",
  "Fisioterapia",
  "Radiologia",
  "Oncologia",
  "Outros"
];

// ===========================
// ESTRUTURA DO CARDÁPIO (2026)
// ===========================
const menuData = [
  // NOVIDADES INSERIDAS AQUI COM LAYOUT DE CARDS
  {
    categoria: "Novidades - Refeições",
    icone: "images/topo.png",
    layout: "cards",
    itens: [
      { 
        nome: "Sugestão 1", 
        descricao: "Filé de frango (150g) acompanhado de purê de mandioquinha (150g).", 
        preco: 32.90,
        imagem: "images/sugestao1.jpg" 
      },
      { 
        nome: "Sugestão 2", 
        descricao: "Filé de frango (150g), alface americano (120g), croutons e molho Caesar.", 
        preco: 32.90,
        imagem: "images/sugestao2.jpg" 
      },
      { 
        nome: "Sugestão 3", 
        descricao: "Queijo minas frescal (40g), alface americano (100g), croutons, cenoura ralada (35g), tomate (45g) e molho italiano.", 
        preco: 28.90,
        imagem: "images/sugestao3.jpg" 
      },
      { 
        nome: "Sugestão 4", 
        descricao: "Filé de frango (150g) acompanhado de risoto de brócolis.", 
        preco: 40.00,
        imagem: "images/sugestao4.jpg" 
      },
      { 
        nome: "Sugestão 5 - Ricota e Espinafre", 
        descricao: "Panqueca integral de ricota com espinafre (200g), alface americano (120g) e molho Caesar.", 
        preco: 35.90,
        imagem: "images/sugestao5_ricota.jpg" 
      },
      { 
        nome: "Sugestão 5 - Frango ou Carne", 
        descricao: "Panqueca de frango ou carne (200g), alface americano (120g) e molho Caesar.", 
        preco: 35.90,
        imagem: "images/sugestao5_carne.jpg" 
      }
    ]
  },
  {
    categoria: "Novidades - Brunch",
    icone: "images/xicara.png",
    layout: "cards",
    itens: [
      { 
        nome: "Sugestão Brunch 1", 
        descricao: "Pão de forma (tradicional ou integral), ovo mexido com presunto e queijo, tomate cereja e café expresso.", 
        preco: 25.00,
        imagem: "images/brunch1.jpg" 
      },
      { 
        nome: "Sugestão Brunch 2", 
        descricao: "Pão de forma (tradicional ou integral), omelete de presunto/queijo, tomate cereja, alface, fruta (maçã ou banana) e média.", 
        preco: 27.90,
        imagem: "images/brunch2.jpg" 
      },
      { 
        nome: "Sugestão Brunch 3", 
        descricao: "Pão de forma (tradicional ou integral), omelete de presunto/queijo, tomate cereja, alface, fatia de bolo caseiro, fruta e média.", 
        preco: 39.90,
        imagem: "images/brunch3.jpg" 
      }
    ]
  },
  // CARDÁPIO PADRÃO ABAIXO
  {
    categoria: "Salgados",
    icone: "images/salgado.png",
    itens: [
      { nome: "Calzone", preco: 10.00 },
      { nome: "Coxinha", preco: 10.00 },
      { nome: "Croissant (pizza/4 queijos)", preco: 10.00 },
      { nome: "Esfiha carne/calabresa", preco: 10.00 },
      { nome: "Hamburguer com mussarela", preco: 12.50 },
      { nome: "Kibe", preco: 10.00 },
      { nome: "Pastel de frango", preco: 10.00 },
      { nome: "Pastel int. Brócolis ou ricota", preco: 11.00 },
      { nome: "Pão de batata", preco: 8.50 },
      { nome: "Folhado de presunto", preco: 11.00 },
      { nome: "Pão de queijo", preco: 5.50 },
      { nome: "Mini Pizza", preco: 13.50 },
      { nome: "Espeto de frango", preco: 13.00 },
      { nome: "Torta de frango/palmito", preco: 12.50 }
    ]
  },
  {
    categoria: "Comidinhas",
    icone: "images/pão.png",
    itens: [
      { nome: "Lanche Natural", preco: 20.00 },
      { nome: "Pão Francês", preco: 5.50 },
      { nome: "Pão com ovos", preco: 12.00 },
      { nome: "Cuscuz com manteiga", preco: 6.50 },
      { nome: "Mistão de Presunto e queijo", preco: 11.50 }
    ]
  },
  {
    categoria: "Pratos Rápidos",
    icone: "images/topo.png",
    itens: [
      { nome: "Massa", preco: 28.00 },
      { nome: "Comida brasileira", preco: 28.50 },
      { nome: "Cremes", preco: 27.50 },
      { nome: "Prato vegetariano", preco: 40.00 },
      { nome: "Ovo mexido", preco: 14.50 }
    ]
  },
  {
    categoria: "Bebidas",
    icone: "images/saleiro.png",
    itens: [
      { nome: "Água de coco", preco: 7.50 },
      { nome: "Água sem gás/com gás", preco: 5.50 },
      { nome: "Refrigerantes", preco: 8.50 },
      { nome: "Chá gelado - Ice Tea", preco: 10.00 },
      { nome: "Gatorade", preco: 12.00 },
      { nome: "Green People", preco: 16.00 },
      { nome: "Suco Del Vale", preco: 9.50 },
      { nome: "Todinho", preco: 6.00 },
      { nome: "Tônica", preco: 8.50 },
      { nome: "Mini Refri", preco: 5.50 }
    ]
  },
  {
    categoria: "Cafeteria",
    icone: "images/xicara.png",
    itens: [
      { nome: "Café", preco: 7.00 },
      { nome: "Cappuccino", preco: 11.00 },
      { nome: "Média", preco: 9.00 },
      { nome: "Café com leite P", preco: 7.50 },
      { nome: "Chá quente", preco: 7.00 },
      { nome: "Chocolate quente", preco: 11.00 }
    ]
  },
  {
    categoria: "Doces",
    icone: "images/bolo decorado.png",
    itens: [
      { nome: "Biscoito petit four", preco: 9.50 },
      { nome: "Jujuba", preco: 8.00 },
      { nome: "Bolo pedaço", preco: 10.00 },
      { nome: "Trufa", preco: 6.00 },
      { nome: "Pirulito de chocolate", preco: 15.00 },
      { nome: "Tiramissu", preco: 16.00 },
      { nome: "Bolo festa", preco: 17.00 },
      { nome: "Torta de morango", preco: 12.50 },
      { nome: "Brownie", preco: 11.50 },
      { nome: "Quindim", preco: 11.00 },
      { nome: "Donuts (doce de leite/creme)", preco: 11.00 },
      { nome: "Salada de fruta", preco: 16.50 },
      { nome: "Frutas", preco: 4.50 }
    ]
  },
  {
    categoria: "Mercadinho",
    icone: "images/rosquinha.png",
    itens: [
      { nome: "Halls / Trident", preco: 4.00 },
      { nome: "Povilho", preco: 8.00 },
      { nome: "Bis", preco: 7.50 },
      { nome: "Pururuca", preco: 5.00 },
      { nome: "Chocolate 34g", preco: 5.00 },
      { nome: "Chocolate 90g", preco: 15.00 },
      { nome: "Baton", preco: 3.50 },
      { nome: "Brigadeiro", preco: 7.00 },
      { nome: "Suflair", preco: 9.00 },
      { nome: "Paçoca", preco: 1.20 },
      { nome: "Mix de nuts / Castanha", preco: 17.00 },
      { nome: "Bolacha recheada", preco: 7.50 },
      { nome: "Roll / Pão de mel / Bolinho Bauducco", preco: 4.00 },
      { nome: "Cookie 40g Bauducco", preco: 6.50 },
      { nome: "Max goiabinha", preco: 3.50 }
    ]
  }
];

// ===========================
// ESTADO DO CARRINHO
// ===========================
let carrinho = [];

// ===========================
// RENDERIZAR MENU (COM SUPORTE A CARDS)
// ===========================
function renderMenu() {
  const menuContainer = document.getElementById("menu-container");
  if (!menuContainer) return;

  menuContainer.innerHTML = "";

  menuData.forEach((categoriaObj) => {
    const section = document.createElement("section");
    section.className = "menu-section";

    const h2 = document.createElement("h2");
    const iconImg = document.createElement("img");
    iconImg.src = categoriaObj.icone;
    iconImg.alt = categoriaObj.categoria;
    iconImg.className = "category-icon";

    const spanTitle = document.createElement("span");
    spanTitle.textContent = categoriaObj.categoria;

    h2.appendChild(iconImg);
    h2.appendChild(spanTitle);
    section.appendChild(h2);

    const listDiv = document.createElement("div");
    
    // VERIFICA SE A CATEGORIA USA LAYOUT DE CARDS OU LISTA
    if (categoriaObj.layout === "cards") {
      listDiv.className = "cards-grid";

      categoriaObj.itens.forEach((item) => {
        const cardDiv = document.createElement("div");
        cardDiv.className = "item-card";

        const img = document.createElement("img");
        img.src = item.imagem || "images/placeholder.jpg"; // Fallback caso não ache a imagem
        img.alt = item.nome;
        img.className = "item-card-img";

        const infoDiv = document.createElement("div");
        infoDiv.className = "item-card-info";

        const title = document.createElement("h3");
        title.className = "item-card-title";
        title.textContent = item.nome;

        const desc = document.createElement("p");
        desc.className = "item-card-desc";
        desc.textContent = item.descricao;

        const footerDiv = document.createElement("div");
        footerDiv.className = "item-card-footer";

        const priceSpan = document.createElement("span");
        priceSpan.className = "item-price";
        priceSpan.textContent = `R$ ${item.preco.toFixed(2).replace(".", ",")}`;

        const btnAdd = document.createElement("button");
        btnAdd.className = "btn-add";
        btnAdd.textContent = "+ Adicionar";
        btnAdd.addEventListener("click", () =>
          adicionarAoCarrinho(item.nome, item.preco)
        );

        footerDiv.appendChild(priceSpan);
        footerDiv.appendChild(btnAdd);

        infoDiv.appendChild(title);
        infoDiv.appendChild(desc);
        infoDiv.appendChild(footerDiv);

        cardDiv.appendChild(img);
        cardDiv.appendChild(infoDiv);

        listDiv.appendChild(cardDiv);
      });

    } else {
      // LAYOUT LISTA PADRÃO
      listDiv.className = "item-list";

      categoriaObj.itens.forEach((item) => {
        const itemDiv = document.createElement("div");
        itemDiv.className = "item";

        const nameSpan = document.createElement("span");
        nameSpan.className = "item-name";
        nameSpan.textContent = item.nome;

        const priceSpan = document.createElement("span");
        priceSpan.className = "item-price";
        priceSpan.textContent = `R$ ${item.preco.toFixed(2).replace(".", ",")}`;

        const btnAdd = document.createElement("button");
        btnAdd.className = "btn-add";
        btnAdd.textContent = "+ Adicionar";
        btnAdd.addEventListener("click", () =>
          adicionarAoCarrinho(item.nome, item.preco)
        );

        itemDiv.appendChild(nameSpan);
        itemDiv.appendChild(priceSpan);
        itemDiv.appendChild(btnAdd);

        listDiv.appendChild(itemDiv);
      });
    }

    section.appendChild(listDiv);
    menuContainer.appendChild(section);
  });
}

// ===========================
// ADICIONAR AO CARRINHO
// ===========================
function adicionarAoCarrinho(nome, preco) {
  const existente = carrinho.find((item) => item.nome === nome);
  if (existente) {
    existente.quantidade += 1;
  } else {
    carrinho.push({ nome, preco, quantidade: 1 });
  }
  renderCarrinho();
}

// ===========================
// ATUALIZAR QUANTIDADE
// ===========================
function atualizarQuantidade(nome, delta) {
  carrinho = carrinho
    .map((item) =>
      item.nome === nome
        ? { ...item, quantidade: item.quantidade + delta }
        : item
    )
    .filter((item) => item.quantidade > 0);

  renderCarrinho();
}

// ===========================
// RENDERIZAR CARRINHO
// ===========================
function renderCarrinho() {
  const container = document.getElementById("carrinho-container");
  const totalSpan = document.getElementById("total");
  if (!container || !totalSpan) return;

  container.innerHTML = "";

  let total = 0;

  carrinho.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-row";

    const nameSpan = document.createElement("span");
    nameSpan.className = "cart-item-name";
    nameSpan.textContent = item.nome;

    const controlsDiv = document.createElement("div");
    controlsDiv.className = "cart-controls";

    const btnMinus = document.createElement("button");
    btnMinus.className = "cart-btn";
    btnMinus.textContent = "−";
    btnMinus.addEventListener("click", () => atualizarQuantidade(item.nome, -1));

    const qtySpan = document.createElement("span");
    qtySpan.className = "cart-qty";
    qtySpan.textContent = item.quantidade;

    const btnPlus = document.createElement("button");
    btnPlus.className = "cart-btn";
    btnPlus.textContent = "+";
    btnPlus.addEventListener("click", () => atualizarQuantidade(item.nome, 1));

    controlsDiv.appendChild(btnMinus);
    controlsDiv.appendChild(qtySpan);
    controlsDiv.appendChild(btnPlus);

    const subtotal = item.preco * item.quantidade;
    total += subtotal;

    const subtotalSpan = document.createElement("span");
    subtotalSpan.className = "cart-subtotal";
    subtotalSpan.textContent = `R$ ${subtotal.toFixed(2).replace(".", ",")}`;

    row.appendChild(nameSpan);
    row.appendChild(controlsDiv);
    row.appendChild(subtotalSpan);

    container.appendChild(row);
  });

  totalSpan.textContent = `R$ ${total.toFixed(2).replace(".", ",")}`;
}

// ===========================
// PREENCHER SETORES
// ===========================
function preencherSetores() {
  const selectSetor = document.getElementById("setor");
  if (!selectSetor) return;

  selectSetor.innerHTML = '<option value="">Selecione...</option>';

  setoresHospital.forEach((setor) => {
    const option = document.createElement("option");
    option.value = setor;
    option.textContent = setor;
    selectSetor.appendChild(option);
  });
}

// ===========================
// MONTAR MENSAGEM WHATSAPP
// ===========================
function montarMensagemWhatsApp() {
  const nome = document.getElementById("nome")?.value?.trim() || "";
  const tipoConsumo =
    document.getElementById("tipo-consumo")?.value || "Não informado";
  const setor = document.getElementById("setor")?.value || "Não informado";
  const pagamento =
    document.getElementById("pagamento")?.value || "Não informado";
  const observacoes =
    document.getElementById("observacoes")?.value?.trim() || "";

  let mensagem = `*Pedido - Dolce Café – AACD Ibirapuera*\n\n`;

  if (carrinho.length === 0) {
    mensagem += "_(Carrinho vazio)_\n\n";
  } else {
    mensagem += "*Itens:*\n";
    let total = 0;
    carrinho.forEach((item) => {
      const subtotal = item.preco * item.quantidade;
      total += subtotal;
      mensagem += `- ${item.quantidade}x ${item.nome} - R$ ${subtotal
        .toFixed(2)
        .replace(".", ",")}\n`;
    });
    mensagem += `\n*Total:* R$ ${total.toFixed(2).replace(".", ",")}\n\n`;
  }

  mensagem += `*Nome:* ${nome || "Não informado"}\n`;
  mensagem += `*Tipo de consumo:* ${tipoConsumo}\n`;
  mensagem += `*Setor/local:* ${setor}\n`;
  mensagem += `*Pagamento:* ${pagamento}\n`;

  if (observacoes) {
    mensagem += `\n*Observações:*\n${observacoes}\n`;
  }

  return encodeURIComponent(mensagem);
}

// ===========================
// ENVIAR WHATSAPP
// ===========================
function enviarWhatsApp() {
  const mensagemCodificada = montarMensagemWhatsApp();
  const numero = "5511918360016";
  const url = `https://wa.me/${numero}?text=${mensagemCodificada}`;
  window.open(url, "_blank");
}

// ===========================
// INICIALIZAÇÃO
// ===========================
document.addEventListener("DOMContentLoaded", () => {
  renderMenu();
  renderCarrinho();
  preencherSetores();

  const btnEnviar = document.getElementById("btn-enviar");
  if (btnEnviar) {
    btnEnviar.addEventListener("click", (e) => {
      e.preventDefault();
      enviarWhatsApp();
    });
  }
});
