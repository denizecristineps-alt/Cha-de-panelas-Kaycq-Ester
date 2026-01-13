# 🧪 Demonstração - Painel Administrativo

## 🎯 **CENÁRIOS DE TESTE**

### **Cenário 1: Dashboard e Estatísticas**

1. **Acesse o Painel**:
   - Abra `admin.html`
   - Verifique se o dashboard carrega corretamente

2. **Verifique as Estatísticas**:
   - Total de Presentes: deve mostrar 23 itens
   - Presentes Reservados: depende das reservas no site principal
   - Confirmações: depende dos RSVPs no site principal
   - Categorias: deve mostrar 6 categorias (exceto "Todos")

3. **Teste Ações Rápidas**:
   - Clique em "Adicionar Presente"
   - Clique em "Gerenciar Categorias" 
   - Clique em "Configurações"

---

### **Cenário 2: Adicionar Novo Presente**

1. **Abrir Modal**:
   - Clique em "Adicionar Presente" na aba Gerenciar Presentes

2. **Upload de Imagem**:
   - **Teste Drag & Drop**: Arraste uma imagem para a área
   - **Teste Clique**: Clique na área para selecionar arquivo
   - **Validação**: Tente enviar arquivo não-imagem (deve dar erro)
   - **Validação**: Tente imagem > 5MB (deve dar erro)

3. **Preencher Dados**:
   ```
   Nome: "Conjunto de Panelas Premium"
   Descrição: "Panelas antiaderentes com revestimento cerâmico"
   Categoria: "Cozinha"
   Quantidade: "2"
   Cores: Selecione "Preto" e "Inox"
   ```

4. **Salvar e Verificar**:
   - Clique "Salvar Presente"
   - Verifique se o item aparece na lista
   - Verifique se a quantidade aparece corretamente

---

### **Cenário 3: Editar Presente Existente**

1. **Localizar Item**:
   - Encontre o item "Jogo de Panelas" na lista
   - Clique em "Editar"

2. **Modificar Dados**:
   ```
   Nome: "Jogo de Panelas Profissional"
   Descrição: "Conjunto completo com 8 peças antiaderentes"
   Quantidade: "1"
   Cores: Adicione "Bambu"
   ```

3. **Salvar Alterações**:
   - Clique "Salvar Presente"
   - Verifique se as alterações foram aplicadas

---

### **Cenário 4: Sistema de Categorias**

1. **Nova Categoria**:
   - Vá para aba "Categorias"
   - Clique "Nova Categoria"
   ```
   Nome: "Jardim"
   Ícone: "flower"
   ```
   - Salve e verifique se aparece na lista

2. **Editar Categoria Existente**:
   - Clique no ícone de editar da categoria "Sala"
   - Mude o nome para "Sala de Estar"
   - Salve as alterações

3. **Usar Nova Categoria**:
   - Vá para "Gerenciar Presentes"
   - Crie um novo presente com categoria "Jardim"
   - Verifique se o item aparece na listagem

---

### **Cenário 5: Configurações do Evento**

1. **Informações do Evento**:
   - Vá para aba "Configurações"
   - Altere os dados:
   ```
   Nome do Casal: "Maria & Carlos"
   Título: "Nosso Chá de Casa Nova"
   Data: "20 de Abril, 2025"
   Horário: "16:00h"
   Local: "Casa da Mãe - São Paulo"
   Descrição: "Celebrando nossa nova vida juntos!"
   ```

2. **Informações de Contato**:
   ```
   Telefone: "(11) 98888-7777"
   Email: "maria.carlos@email.com"
   WhatsApp: "5511988887777"
   ```

3. **Salvar e Verificar**:
   - Clique "Salvar Configurações"
   - Vá para o site principal (index.html)
   - Verifique se as informações foram atualizadas

---

### **Cenário 6: Sistema de Backup**

1. **Exportar Backup**:
   - No cabeçalho, clique "Exportar Backup"
   - Verifique se o arquivo foi baixado
   - Nome deve ser: `cha-panela-backup-YYYY-MM-DD.json`

2. **Importar Backup**:
   - Faça algumas alterações nos dados
   - Clique "Importar Backup"
   - Selecione o arquivo exportado
   - Verifique se os dados foram restaurados

---

### **Cenário 7: Interface Responsiva**

1. **Teste Mobile**:
   - Reduza a janela do navegador para mobile
   - Verifique se o menu vira abas horizontais
   - Teste drag & drop no mobile

2. **Teste Tablet**:
   - Ajuste para tamanho tablet
   - Verifique layout das listas
   - Teste modais em tela média

---

### **Cenário 8: Validações e Erros**

1. **Campos Obrigatórios**:
   - Tente salvar presente sem nome (deve dar erro)
   - Tente salvar sem categoria (deve dar erro)
   - Tente salvar sem cores (deve dar erro)

2. **Validação de Imagem**:
   - Tente fazer upload de arquivo .txt (deve dar erro)
   - Tente imagem muito grande (deve dar erro)

3. **Categoria com Itens**:
   - Tente excluir categoria "Cozinha" (deve dar erro por ter itens)

---

## 🔍 **CHECKLIST DE VALIDAÇÃO**

### ✅ **Funcionalidades Básicas**
- [ ] Dashboard carrega e mostra estatísticas corretas
- [ ] Todas as 4 abas funcionam (Overview, Presentes, Categorias, Configurações)
- [ ] Navegação entre abas funciona sem erros
- [ ] Interface responsiva em diferentes tamanhos

### ✅ **Gerenciar Presentes**
- [ ] Modal de adicionar presente abre corretamente
- [ ] Upload de imagem funciona (drag & drop e clique)
- [ ] Preview da imagem aparece após upload
- [ ] Seletor de cores funciona
- [ ] Salvar presente adiciona à lista
- [ ] Editar presente carrega dados corretos
- [ ] Excluir presente pede confirmação
- [ ] Busca de presentes funciona
- [ ] Filtro por categoria funciona
- [ ] Quantidade aparece nos cards

### ✅ **Gerenciar Categorias**
- [ ] Modal de nova categoria abre
- [ ] Salvar categoria adiciona à lista
- [ ] Editar categoria carrega dados
- [ ] Excluir categoria funciona (se vazia)
- [ ] Estatísticas por categoria aparecem

### ✅ **Configurações**
- [ ] Formulário carrega dados atuais
- [ ] Salvar configurações do evento funciona
- [ ] Salvar contato funciona
- [ ] Dados se refletem no site principal

### ✅ **Sistema de Backup**
- [ ] Exportar backup gera arquivo JSON
- [ ] Importar backup restaura dados
- [ ] Validação de arquivo inválido

### ✅ **UX/UI**
- [ ] Toast notifications aparecem
- [ ] Modais abrem/fecham corretamente
- [ ] Loading states funcionam
- [ ] Ícones Lucide carregam
- [ ] Cores e estilos consistentes

---

## 🚨 **PROBLEMAS COMUNS E SOLUÇÕES**

### **Problema**: Imagem não carrega no preview
**Solução**: 
- Verifique se o arquivo é uma imagem válida
- Confirme que o tamanho é menor que 5MB
- Tente recarregar a página

### **Problema**: Configurações não salvam
**Solução**:
- Verifique se o navegador permite LocalStorage
- Teste em modo privado/incógnito
- Limpe o cache do navegador

### **Problema**: Backup não importa
**Solução**:
- Confirme que é um arquivo JSON válido
- Verifique se contém a estrutura esperada
- Tente exportar novo backup primeiro

### **Problema**: Cores não aparecem no site principal
**Solução**:
- Selecione pelo menos uma cor no admin
- Recarregue o site principal (index.html)
- Verifique se a categoria está correta

---

## 📱 **TESTES EM DISPOSITIVOS**

### **Desktop (1920x1080)**:
- Layout completo em grid
- Todas as funcionalidades acessíveis
- Drag & drop funciona perfeitamente

### **Tablet (768x1024)**:
- Layout adaptado para tela média
- Modais redimensionam corretamente
- Listas empilham adequadamente

### **Mobile (375x667)**:
- Menu vira tabs horizontais
- Cards em coluna única
- Touch-friendly para drag & drop

---

## 🎯 **OBJETIVOS DO TESTE**

Após completar todos os cenários, você deve conseguir:

1. ✅ **Gerenciar presentes** completamente via interface visual
2. ✅ **Organizar categorias** e itens eficientemente  
3. ✅ **Personalizar evento** sem editar código
4. ✅ **Fazer backup** das configurações
5. ✅ **Usar em qualquer dispositivo** com boa experiência

O painel administrativo transforma a gestão do site de um processo técnico para uma experiência visual e intuitiva!