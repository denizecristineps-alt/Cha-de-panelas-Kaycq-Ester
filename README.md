# Site do Chá de Panela - Ana & João

Um site romântico e funcional para celebração de chá de panela com sistema de reserva de presentes e confirmação de presença.

## 🎉 Funcionalidades

### ✨ Seção Hero
- Foto romântica do casal
- Informações do evento (data, horário, local)
- Botão de call-to-action para confirmação

### 🎁 Lista de Presentes
- **Sistema de Reserva**: Convidados podem marcar itens para presentear
- **Bloqueio Automático**: Impede marcação dupla de itens
- **Flexibilidade**: Convidados podem cancelar ou alterar escolhas
- **Categorização**: Itens organizados por categorias (Cozinha, Banheiro, Limpeza, Quarto, Área de Serviço)
- **Campo de Pesquisa**: Busca por nome ou descrição dos itens
- **Cores Sugeridas**: Indicação visual das cores disponíveis (Preto, Branco, Inox, Bambu)
- **Layout Responsivo**: Visual otimizado para todos os dispositivos
- **Sem Preços**: Foco na experiência, sem pressão por valores
- **Feedback Visual**: Estados visuais diferentes para cada situação
  - Disponível (botão "Quero Presentear")
  - Reservado por outro (botão "Já Reservado")
  - Reservado pelo usuário (botão "Cancelar Reserva")

### 📝 Formulário RSVP
- Confirmação de presença obrigatória
- Seleção do presente escolhido
- Campo para recado aos noivos
- Validação de campos
- Modal de confirmação de sucesso

### 📧 Sistema de Notificações
- Toast notifications para feedback instantâneo
- Modal de sucesso após envio
- Simulação de envio de email para os noivos
- Notificação visual de sucesso

### 🎨 Design
- **Paleta Romântica**: Tons de marrom, preto e branco
- **Tipografia Elegante**: Cormorant Garamond para títulos, Inter para texto
- **Animações Suaves**: Transições de 300-400ms
- **Layout Responsivo**: Otimizado para mobile e desktop
- **Ícones Lucide**: Ícones modernos e elegantes

## 🎛️ Painel Administrativo

### **Novo! Sistema Completo de Gestão**

O projeto agora inclui um **painel administrativo completo** para gerenciar todos os aspectos do site de forma visual e intuitiva.

#### 🚀 **Como Acessar:**
1. Abra o arquivo `admin.html` no navegador
2. Interface moderna com 4 abas principais

#### 📊 **Funcionalidades do Painel:**

**Dashboard (Visão Geral):**
- Estatísticas em tempo real
- Total de presentes, reservas e confirmações
- Ações rápidas para funções comuns

**Gerenciar Presentes:**
- ✅ **Upload de Imagens**: Drag & drop com preview
- ✅ **CRUD Completo**: Adicionar, editar, excluir presentes
- ✅ **Campo Quantidade**: Defina quantos itens estão disponíveis
- ✅ **Categorias**: Organize por Cozinha, Sala, Banheiro, etc.
- ✅ **Cores Sugeridas**: Seleção visual das cores
- ✅ **Busca e Filtros**: Encontre itens rapidamente

**Gerenciar Categorias:**
- ✅ **Nova Categoria "Sala"**: Mobília e decoração
- ✅ **Ícones Personalizados**: Escolha entre ícones Lucide
- ✅ **Estatísticas**: Veja quantos itens por categoria

**Configurações:**
- ✅ **Informações do Evento**: Nome do casal, data, local
- ✅ **Dados de Contato**: Telefone, email, WhatsApp
- ✅ **Salvamento Automático**: Configurações salvas no navegador

#### 💾 **Sistema de Backup:**
- **Exportar**: Baixe configurações em JSON
- **Importar**: Restaure backup de configurações
- **Automático**: Dados salvos localmente

#### 🎨 **Categorias Disponíveis:**
- 🍽️ **Cozinha** - Utensílios e eletrodomésticos
- 🛋️ **Sala** *(nova)* - Móveis e decoração
- 🚿 **Banheiro** - Toalhas e acessórios
- 🧹 **Limpeza** - Aspiradores e produtos
- 🛏️ **Quarto** - Roupa de cama e almofadas
- 🧺 **Área de Serviço** - Ferro e organização

> 📖 **Documentação Completa**: Veja o arquivo `PAINEL_ADMIN.md` para guia detalhado

## 🛠️ Personalização

### Alterar Informações do Casal
No arquivo `index.html`, altere:

```html
<!-- Linha 15-17 -->
<h1 class="hero-title">Ana & João</h1>

<!-- Linha 20-28 -->
<div class="hero-info">
    <div class="info-item">
        <i data-lucide="calendar" class="info-icon"></i>
        <span>15 de Março, 2025</span>
    </div>
    <!-- ... outras informações ... -->
</div>
```

### Alterar Lista de Presentes
No arquivo `script.js`, modifique o array `giftItems`:

```javascript
const giftItems = [
    {
        id: 1,
        name: "Nome do Presente",
        description: "Descrição detalhada",
        price: "R$ 00,00",
        image: "URL_DA_IMAGEM"
    },
    // ... outros itens
];
```

### Alterar Contato
No arquivo `index.html`, altere a seção de contato:

```html
<!-- Linha 130-145 -->
<div class="contact-card">
    <i data-lucide="phone" class="contact-icon"></i>
    <h3>Telefone</h3>
    <p>SEU_TELEFONE</p>
</div>
<div class="contact-card">
    <i data-lucide="mail" class="contact-icon"></i>
    <h3>E-mail</h3>
    <p>SEU_EMAIL</p>
</div>
```

### Alterar Cores
No arquivo `styles.css`, modifique as variáveis de cor:

```css
:root {
    --primary-color: #5D4037;      /* Marrom principal */
    --primary-light: #D7CCC8;      /* Marrom claro */
    --bg-color: #FBF9F7;           /* Fundo off-white */
    --text-dark: #212121;          /* Texto escuro */
    --text-medium: #424242;        /* Texto médio */
}
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:

- **Mobile**: Layout vertical, botões maiores, navegação simplificada
- **Tablet**: Grid adaptativo, tipografia ajustada
- **Desktop**: Layout completo com todas as funcionalidades

## 🚀 Como Usar

1. **Abrir o Site**: Abra o arquivo `index.html` em qualquer navegador moderno
2. **Navegar**: Use a rolagem suave para navegar pelas seções
3. **Escolher Presente**: Clique em "Quero Presentear" nos itens desejados
4. **Confirmar Presença**: Preencha o formulário na seção RSVP
5. **Receber Confirmação**: Veja a modal de sucesso após enviar

## 💾 Armazenamento Local

O site utiliza localStorage para persistir:
- **Reservas de Presentes**: Mantém quem reservou cada item
- **Confirmações**: Salva informações dos convidados
- **Estado da Interface**: Mantém o estado visual atualizado

## 📧 Sistema de Email

O sistema simula o envio de email com as seguintes informações:
- Nome do convidado
- Confirmação de presença
- Presente escolhido
- Recado (se fornecido)
- Timestamp da confirmação

**Para implementar email real**, substitua a função `sendEmailNotification()` por um serviço como:
- EmailJS
- Netlify Forms
- Formspree
- Backend personalizado

## 🔧 Funcionalidades Técnicas

### Validações
- Nome obrigatório (mín. 2 caracteres)
- Confirmação de presença obrigatória
- Prevenção de reservas duplicadas
- Feedback visual para todas as ações

### Estados da Interface
- **Loading**: Animação de carregamento nos botões
- **Success**: Toast verde com confirmação
- **Warning**: Toast laranja para alertas
- **Error**: Toast vermelho para erros

### Acessibilidade
- Navegação por teclado
- Foco visível nos elementos
- Contraste adequado (AAA)
- Estrutura semântica HTML

## 🎯 Próximas Funcionalidades

Possíveis melhorias que podem ser implementadas:

- [ ] Sistema de login para convidados
- [ ] Upload de fotos do evento
- [ ] Contador de confirmados
- [ ] Integração com WhatsApp
- [ ] Galeria de fotos
- [ ] Mapa de localização
- [ ] Compartilhamento social
- [ ] Tema escuro
- [ ] PWA (Progressive Web App)

## 📞 Suporte

Para dúvidas sobre personalização ou implementação de novas funcionalidades, consulte a documentação ou entre em contato.

---

**Desenvolvido com ❤️ para celebrar momentos especiais**