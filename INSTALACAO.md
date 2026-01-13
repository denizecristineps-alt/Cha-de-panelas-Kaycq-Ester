# 🚀 Guia de Instalação e Uso

## 📁 Arquivos do Projeto

O site é composto pelos seguintes arquivos:

```
📦 Site do Chá de Panela
├── 📄 index.html              # Página principal
├── 📄 styles.css              # Estilos do site
├── 📄 script.js               # Funcionalidades JavaScript
├── 📄 config.js               # Configurações personalizáveis
├── 📄 README.md               # Documentação completa
├── 📄 COMO_PERSONALIZAR.md    # Guia de personalização
├── 📄 INSTALACAO.md           # Este arquivo
└── 📁 imgs/                   # Pasta de imagens
    ├── 📄 casal_hero_7.jpg    # Foto do casal (exemplo)
    ├── 📄 casal_hero_1.jpg    # Fotos alternativas
    └── 📄 casal_hero_9.jpg    # Fotos alternativas
```

## 🖥️ Como Usar

### 1. **Abrir o Site**
- Faça duplo clique no arquivo `index.html`
- Ou arraste o arquivo para o navegador
- O site abrirá automaticamente

### 2. **Personalizar (Opcional)**
- Edite o arquivo `config.js` para alterar:
  - Nomes do casal
  - Data e horário do evento
  - Lista de presentes
  - Cores e textos
- Veja o guia `COMO_PERSONALIZAR.md` para detalhes

### 3. **Hospedar na Internet (Opcional)**

#### **Opção A: GitHub Pages (Gratuito)**
1. Crie uma conta no [GitHub](https://github.com)
2. Crie um novo repositório público
3. Faça upload de todos os arquivos
4. Vá em Settings > Pages
5. Escolha "Deploy from a branch" > main
6. Seu site estará em: `https://seuusuario.github.io/nomerepo`

#### **Opção B: Netlify (Gratuito)**
1. Acesse [netlify.com](https://netlify.com)
2. Faça drag & drop da pasta do site
3. Receive uma URL automática
4. Personalize o nome do site nas configurações

#### **Opção C: Hostinger/HostGator (Pago)**
1. Contrate hospedagem
2. Faça upload via FTP
3. Coloque os arquivos na pasta `public_html`

## ✨ Funcionalidades Principais

### 🎁 **Sistema de Presentes**
- ✅ Convidados podem escolher presentes
- ✅ Bloqueio automático de itens já escolhidos
- ✅ Possibilidade de cancelar escolha
- ✅ Feedback visual em tempo real

### 📝 **Confirmação de Presença**
- ✅ Formulário RSVP completo
- ✅ Validação de campos obrigatórios
- ✅ Campo para recado aos noivos
- ✅ Seleção do presente escolhido

### 📧 **Sistema de Notificações**
- ✅ Toast notifications
- ✅ Modal de confirmação
- ✅ Simulação de email (pode ser integrado)

### 📱 **Design Responsivo**
- ✅ Otimizado para celular
- ✅ Tablet e desktop
- ✅ Animações suaves

## 🔧 Personalização Rápida

### Alterar Nomes do Casal
```javascript
// No arquivo config.js, linha 8
names: "Seu Nome & Nome do/a Parceiro/a"
```

### Alterar Data do Evento
```javascript
// No arquivo config.js, linha 13
date: "Sua data aqui"
```

### Alterar Lista de Presentes
```javascript
// No arquivo config.js, a partir da linha 23
// Adicione, edite ou remova itens do array
```

### Alterar Cores
```javascript
// No arquivo config.js, a partir da linha 130
primaryColor: "#C2185B",  // Sua cor principal
```

## 🐛 Solução de Problemas

### **Site não abre**
- ✅ Verifique se o arquivo `index.html` está na pasta
- ✅ Tente outro navegador (Chrome, Firefox, Safari)
- ✅ Desative bloqueadores de popup

### **Imagens não aparecem**
- ✅ Verifique se a pasta `imgs/` existe
- ✅ Use formatos JPG, PNG ou WebP
- ✅ Verifique se o caminho está correto

### **Formulário não funciona**
- ✅ Verifique se o JavaScript está habilitado
- ✅ Abra o console do navegador (F12) para ver erros
- ✅ Teste em modo incógnito

### **Personalização não aparece**
- ✅ Limpe o cache (Ctrl+F5)
- ✅ Verifique sintaxe do `config.js`
- ✅ Use aspas duplas nos textos

## 📧 Integração de Email

### Para receber confirmações por email:

#### **1. EmailJS (Recomendado)**
```javascript
// Instale o EmailJS e substitua no script.js:
emailjs.send("service_id", "template_id", {
    to_email: "seu@email.com",
    guest_name: data.guestName,
    // ... outros dados
});
```

#### **2. Formspree**
```html
<!-- Adicione no formulário HTML: -->
<form action="https://formspree.io/f/seu_form_id" method="POST">
```

#### **3. Netlify Forms**
```html
<!-- Adicione netlify no formulário: -->
<form netlify>
```

## 🎨 Dicas de Design

### **Fotos do Casal**
- Use fotos em alta resolução (mínimo 1920x1080)
- Formato 16:9 funciona melhor
- Evite fotos muito escuras
- Edite o brilho/contraste se necessário

### **Imagens dos Presentes**
- Use imagens de produtos reais
- Mantenha fundo neutro
- Tamanho consistente (quadrado 1:1)
- Peso máximo: 500KB por imagem

### **Textos**
- Use linguagem calorosa e acolhedora
- Seja específico nos detalhes do evento
- Mantenha mensagens curtas e claras

## 📱 Teste em Dispositivos

### **Celular**
- Teste em diferentes tamanhos de tela
- Verifique se botões são fáceis de tocar
- Certifique-se que textos são legíveis

### **Tablet**
- Verifique layout em modo retrato e paisagem
- Teste formulários e navegação
- Confirme que imagens carregam corretamente

### **Desktop**
- Teste em diferentes navegadores
- Verifique animações e transições
- Confirme que layout fica centralizado

## 🚀 Próximos Passos

### **Para o Dia do Evento**
1. ✅ Teste todas as funcionalidades
2. ✅ Compartilhe o link com os convidados
3. ✅ Prepare respostas para dúvidas
4. ✅ Monitore confirmações diariamente

### **Melhorias Futuras**
- [ ] Adicionar contador regressivo
- [ ] Integração com WhatsApp
- [ ] Galeria de fotos do evento
- [ ] Sistema de comentários
- [ ] Mapa de localização interativo

## 💡 Dicas Extras

### **Backup**
- Faça cópia dos arquivos antes de modificar
- Use controle de versão (Git) se souber usar
- Salve imagens em alta qualidade

### **Performance**
- Comprima imagens antes de usar
- Limite a 20-30 presentes na lista
- Teste em conexão lenta

### **Acessibilidade**
- Use textos alternativos nas imagens
- Mantenha contraste adequado
- Teste navegação por teclado

## 📞 Suporte

### **Precisa de Ajuda?**
1. **Leia a documentação**: `README.md` e `COMO_PERSONALIZAR.md`
2. **Verifique o console**: Pressione F12 no navegador
3. **Teste em modo incógnito**: Para evitar problemas de cache
4. **Use um validador JSON**: Para verificar sintaxe do config.js

### **Recursos Úteis**
- **Validador JSON**: https://jsonlint.com/
- **Compressor de imagens**: https://tinypng.com/
- **Ícones**: https://lucide.dev/
- **Fonts**: https://fonts.google.com/

---

## 🎉 Divirta-se!

Seu site está pronto para receber as confirmações e tornar o chá de panela ainda mais especial!

**Lembre-se**: Este é apenas o começo. Personalize, teste e divirta-se criando algo único para o seu grande dia! 💕

---

**Desenvolvido com ❤️ para celebrar momentos especiais**