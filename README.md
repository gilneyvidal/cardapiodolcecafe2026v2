# ☕ Cardápio Digital - Dolce Café AACD Ibirapuera

Desenvolvido por **Vidal Design Solutions**. 

Este é um sistema de cardápio digital e gestão de pedidos focado em conversão, acessibilidade e performance, projetado especificamente para o contexto hospitalar da AACD Ibirapuera.

🌍 **Acesso ao vivo:** [cardapiodolcecafe.com.br](http://cardapiodolcecafe.com.br)

---

## 🎯 O Problema Resolvido
Pacientes, acompanhantes e funcionários precisavam de uma forma rápida e sem atrito para realizar pedidos no café, seja para consumo no local ou para **entrega direta nos leitos/setores do hospital**. O sistema precisava ser extremamente leve para carregar em redes móveis instáveis e ter uma interface amigável para pessoas com diferentes níveis de literacia digital ou limitações motoras.

## ✨ Principais Funcionalidades

* **Cardápio Dinâmico (Dual Layout):** O sistema renderiza via JavaScript tanto listas clássicas de itens quanto um formato de *Cards* modernos (para dar destaque visual às novidades e refeições principais).
* **Carrinho de Compras Interativo:** Atualização de subtotais e valor total em tempo real, com controle simples de quantidade (+ e -).
* **Contexto Hospitalar Integrado:** O formulário de *checkout* possui uma seleção específica de setores do hospital (UTI, Enfermaria, Radiologia, etc.) para facilitar a logística de entrega no leito.
* **Checkout via WhatsApp (Serverless):** O sistema não exige criação de conta ou login. O pedido é compilado (itens, valores, dados do paciente e observações) e enviado diretamente formatado para o WhatsApp do balcão do café, agilizando o atendimento.

## 🛠️ Tecnologias Utilizadas

O projeto foi construído propositalmente sem frameworks pesados para garantir **máxima velocidade e compatibilidade** em dispositivos móveis antigos.

* **HTML5:** Estrutura semântica e acessível.
* **CSS3:** Estilização com CSS Grid e Flexbox para total responsividade (Mobile-First approach), paleta de cores acolhedora e botões otimizados para toque (Touch Targets).
* **Vanilla JavaScript (ES6):** Manipulação de DOM, estado do carrinho e formatação de URI para o WhatsApp.
* **Otimização de Imagens:** Fotos tratadas e comprimidas via Web/MozJPEG para garantir que nenhuma imagem ultrapasse 150kb.

---

## 🚀 Como rodar o projeto localmente

Como o projeto utiliza tecnologias web puras, não é necessário compilar ou instalar dependências (`node_modules`).

1. Faça o clone deste repositório:
   ```bash
   git clone [https://github.com/SEU_USUARIO/cardapio-dolce-cafe.git](https://github.com/SEU_USUARIO/cardapio-dolce-cafe.git)
