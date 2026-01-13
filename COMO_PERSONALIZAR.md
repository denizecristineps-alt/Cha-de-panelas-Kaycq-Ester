# 🎨 Guia de Personalização do Site

Este guia mostra como personalizar facilmente o site do seu chá de panela sem precisar mexer no código principal.

## 🚀 Personalização Rápida

### 1. Informações do Casal e Evento

**Arquivo:** `config.js` - Linhas 7-20

```javascript
couple: {
    names: "Ana & João",                    // ← Altere os nomes aqui
    heroImage: "imgs/casal_hero_7.jpg",     // ← Substitua pela foto do casal
    story: "Sua história romântica aqui..." // ← Sua mensagem especial
},

event: {
    title: "Nosso Chá de Panela",           // ← Título do evento
    date: "15 de Março, 2025",             // ← Data do evento
    time: "14:00h",                        // ← Horário do evento
    location: "Salão de Festas - Casa da Mãe", // ← Local do evento
    description: "Sua descrição aqui..."    // ← Descrição do evento
}
```

### 2. Lista de Presentes

**Arquivo:** `config.js` - Linhas 23-120

Para adicionar um presente:

```javascript
{
    id: 13,                              // ← Novo ID (único)
    name: "Seu Presente",                // ← Nome do presente
    description: "Descrição do item",    // ← Descrição
    category: "cozinha",                 // ← Categoria (cozinha, banheiro, limpeza, quarto, area-servico)
    colorSuggestions: ["preto", "branco"], // ← Cores sugeridas (preto, branco, inox, bambu)
    image: "URL_DA_IMAGEM"               // ← URL da imagem
}
```

**Categorias disponíveis:**
- `cozinha` - Utensílios e eletrodomésticos de cozinha
- `banheiro` - Itens para banheiro
- `limpeza` - Produtos de limpeza
- `quarto` - Itens para quarto
- `area-servico` - Produtos para área de serviço

**Cores sugeridas disponíveis:**
- `preto` - Preto
- `branco` - Branco  
- `inox` - Inox (prateado)
- `bambu` - Bambu (bege)

Para remover um presente, delete todo o bloco do item desejado.

**Imagens dos Presentes:**
- Use imagens em alta resolução (mínimo 300x300px)
- Formatos suportados: JPG, PNG, WebP
- Você pode usar serviços como:
  - Unsplash (fotos gratuitas): https://unsplash.com
  - Pexels (fotos gratuitas): https://pexels.com
  - Google Images (com licença comercial)

### 3. Informações de Contato

**Arquivo:** `config.js` - Linhas 123-127

```javascript
contact: {
    phone: "(11) 99999-9999",          // ← Seu telefone
    email: "seu@email.com",            // ← Seu email
    whatsapp: "5511999999999"          // ← WhatsApp (código país + número)
}
```

## 🎨 Personalização Visual

### 1. Cores do Site

**Arquivo:** `config.js` - Linhas 130-138

```javascript
theme: {
    primaryColor: "#5D4037",      // ← Cor principal (marrom)
    primaryLight: "#D7CCC8",      // ← Cor clara (marrom claro)
    backgroundColor: "#FBF9F7",   // ← Cor de fundo (off-white)
    textDark: "#212121",          // ← Texto escuro
    textMedium: "#424242",        // ← Texto médio
    successColor: "#2E7D32",      // ← Verde para sucesso
    warningColor: "#ED6C02",      // ← Laranja para avisos
    errorColor: "#D32F2F"         // ← Vermelho para erros
}
```

**Sugestões de Paletas:**

**Romântica Rosa:**
```javascript
primaryColor: "#C2185B",
primaryLight: "#F8BBD9",
backgroundColor: "#FCE4EC",
```

**Elegante Dourado:**
```javascript
primaryColor: "#F57C00",
primaryLight: "#FFCC80",
backgroundColor: "#FFF8E1",
```

**Clássico Azul:**
```javascript
primaryColor: "#1976D2",
primaryLight: "#90CAF9",
backgroundColor: "#E3F2FD",
```

### 2. Textos Personalizados

**Arquivo:** `config.js` - Linhas 142-250

Você pode alterar todos os textos do site:

```javascript
texts: {
    heroSubtitle: "Sua mensagem aqui...",     // ← Subtítulo da seção hero
    giftListTitle: "Lista de Presentes",      // ← Título da lista
    giftListSubtitle: "Sua instrução...",     // ← Subtítulo da lista
    rsvpTitle: "Confirme sua Presença",      // ← Título do formulário
    // ... e muitos outros textos
}
```

### 3. Foto do Casal

**Substitua a imagem:**
1. Salve sua foto do casal como `imgs/casal_hero_7.jpg`
2. Ou altere no `config.js`:
```javascript
heroImage: "imgs/sua_foto.jpg"
```

**Especificações da foto:**
- Resolução: 1920x1080px ou superior
- Formato: JPG, PNG, WebP
- Aspecto: 16:9 ou similar
- Peso: Máximo 2MB para carregamento rápido

## 📧 Configuração de Email

### Para receber as confirmações por email:

1. **EmailJS** (Gratuito até 200 emails/mês):
   - Crie conta em https://emailjs.com
   - Configure o serviço de email
   - Substitua a função `sendEmailNotification()` no `script.js`

2. **Netlify Forms** (Gratuito):
   - Adicione `netlify` no formulário HTML
   - Configure no painel do Netlify

3. **Formspree** (Gratuito até 50 submissions/mês):
   - Crie conta em https://formspree.io
   - Configure o endpoint

## 📱 Configuração de WhatsApp

Para adicionar botão de WhatsApp:

```html
<!-- Adicione no final do index.html, antes do </body> -->
<a href="https://wa.me/5511999999999?text=Olá!%20Gostaria%20de%20confirmar%20minha%20presença%20no%20chá%20de%20panela." 
   target="_blank" 
   class="whatsapp-button">
   <i data-lucide="message-circle"></i>
   Confirmar via WhatsApp
</a>
```

## 🎯 Personalizações Avançadas

### 1. Adicionar Seção de Localização

```html
<section class="location-section">
    <h2 class="section-title">Localização</h2>
    <div class="map-container">
        <!-- Código do Google Maps -->
        <iframe src="https://www.google.com/maps/embed?pb=..." width="100%" height="300" frameborder="0"></iframe>
    </div>
</section>
```

### 2. Adicionar Contador de Dias

```javascript
// Adicione no script.js
function updateCountdown() {
    const eventDate = new Date("2025-03-15T14:00:00").getTime();
    const now = new Date().getTime();
    const distance = eventDate - now;
    
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("daysCount").innerHTML = days;
}
```

### 3. Adicionar Galeria de Fotos

```html
<section class="photo-gallery">
    <h2 class="section-title">Nossos Momentos</h2>
    <div class="gallery-grid">
        <img src="foto1.jpg" alt="Momento especial">
        <img src="foto2.jpg" alt="Momento especial">
        <!-- Mais fotos... -->
    </div>
</section>
```

## 🔧 Solução de Problemas

### Imagens não carregam:
- Verifique se o caminho está correto
- Use URLs absolutas para imagens externas
- Verifique se o formato é suportado (JPG, PNG, WebP)

### Site não funciona:
- Abra o console do navegador (F12)
- Procure por erros em vermelho
- Verifique se todos os arquivos estão na pasta correta

### Personalização não aparece:
- Limpe o cache do navegador (Ctrl+F5)
- Verifique se as aspas estão corretas no `config.js`
- Confirme que não há vírgulas extras

## 📞 Suporte

Para dúvidas sobre personalização:

1. **Console do Navegador**: Pressione F12 para ver erros
2. **Validação**: Use um validador JSON para o `config.js`
3. **Teste**: Sempre teste as mudanças em um navegador

## 🎉 Exemplo Completo de Personalização

```javascript
couple: {
    names: "Maria & Pedro",
    heroImage: "imgs/casal_maria_pedro.jpg",
    story: "Venha celebrar conosco o início da nossa família!"
},

event: {
    title: "Chá de Panela da Maria",
    date: "20 de Abril, 2025",
    time: "15:30h",
    location: "Clube da Cidade - Salão Rosa",
    description: "Um dia especial para cercarmos de amor!"
},

theme: {
    primaryColor: "#C2185B",
    primaryLight: "#F8BBD9",
    backgroundColor: "#FCE4EC",
    textDark: "#880E4F",
    textMedium: "#AD1457",
    successColor: "#2E7D32",
    warningColor: "#ED6C02",
    errorColor: "#D32F2F"
}
```

---

**💡 Dica**: Faça uma cópia de backup do site antes de fazer alterações!