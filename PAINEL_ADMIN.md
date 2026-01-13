# 🎛️ Painel Administrativo - Guia Completo

## 📋 **VISÃO GERAL**

O Painel Administrativo é uma ferramenta completa que permite gerenciar todos os aspectos do site do chá de panela de forma visual e intuitiva. Acesse através do arquivo `admin.html`.

## 🚀 **COMO ACESSAR**

1. Abra o arquivo `admin.html` no navegador
2. O painel oferece 4 abas principais:
   - **Visão Geral**: Dashboard com estatísticas
   - **Gerenciar Presentes**: CRUD completo de itens
   - **Categorias**: Gerenciar categorias
   - **Configurações**: Personalizar informações do evento

## 📊 **FUNCIONALIDADES PRINCIPAIS**

### 🔍 **Dashboard (Visão Geral)**
- **Total de Presentes**: Contagem de todos os itens
- **Presentes Reservados**: Itens já escolhidos pelos convidados
- **Confirmações**: Número de RSVPs recebidos
- **Categorias**: Total de categorias ativas
- **Ações Rápidas**: Atalhos para funções comuns

### 🎁 **Gerenciar Presentes**
#### Adicionar Novo Presente:
1. Clique em **"Adicionar Presente"**
2. **Upload de Imagem**: 
   - Arraste e solte uma imagem
   - Ou clique para selecionar do computador
   - Formatos aceitos: PNG, JPG (até 5MB)
3. **Informações Básicas**:
   - Nome do presente
   - Descrição detalhada
   - Quantidade disponível
   - Categoria
4. **Cores Sugeridas**: Selecione as cores disponíveis
5. Clique em **"Salvar Presente"**

#### Editar Presente Existente:
1. Encontre o item na lista
2. Clique em **"Editar"**
3. Modifique as informações desejadas
4. Clique em **"Salvar Presente"**

#### Excluir Presente:
1. Clique em **"Excluir"** no card do item
2. Confirme a exclusão

#### Filtrar e Buscar:
- **Busca**: Digite no campo de pesquisa
- **Filtro por Categoria**: Use o dropdown

### 📁 **Gerenciar Categorias**
#### Adicionar Nova Categoria:
1. Clique em **"Nova Categoria"**
2. Informe o nome da categoria
3. Escolha um ícone (nome do Lucide icon)
4. Clique em **"Salvar Categoria"**

#### Categorias Padrão:
- 🍽️ **Cozinha**
- 🛋️ **Sala** *(nova)*
- 🚿 **Banheiro**
- 🧹 **Limpeza**
- 🛏️ **Quarto**
- 🧺 **Área de Serviço**

### ⚙️ **Configurações**
#### Informações do Evento:
- Nome do casal
- Título do evento
- Data e horário
- Local
- Descrição

#### Informações de Contato:
- Telefone
- Email
- Número do WhatsApp

## 🖼️ **SISTEMA DE UPLOAD DE IMAGENS**

### Características:
- **Drag & Drop**: Arraste imagens diretamente para a área
- **Preview Instantâneo**: Visualize a imagem antes de salvar
- **Validação Automática**: 
  - Apenas arquivos de imagem
  - Tamanho máximo: 5MB
- **Armazenamento**: Imagens convertidas para base64

### Dicas:
- Use imagens com **proporção quadrada** (1:1)
- **Resolução recomendada**: 300x300px ou superior
- **Formatos**: PNG, JPG, JPEG

## 🎨 **SELETOR DE CORES**

### Cores Disponíveis:
- **⚫ Preto**: #000000
- **⚪ Branco**: #FFFFFF  
- **🔘 Inox**: #C0C0C0
- **🟤 Bambu**: #D4B896

### Como Usar:
1. Selecione uma ou mais cores
2. As cores aparecerão como pontos coloridos no site
3. Convidados podem escolher a cor preferida

## 💾 **SISTEMA DE BACKUP**

### Exportar Backup:
1. Clique em **"Exportar Backup"**
2. Arquivo JSON será baixado automaticamente
3. Nome do arquivo: `cha-panela-backup-YYYY-MM-DD.json`

### Importar Backup:
1. Clique em **"Importar Backup"**
2. Selecione um arquivo JSON de backup
3. Configurações serão restauradas

### Dados Salvos:
- ✅ Todos os presentes e informações
- ✅ Configurações do evento
- ✅ Categorias personalizadas
- ✅ Informações de contato
- ❌ Reservas de convidados (permanecem no site principal)

## 🔧 **FUNCIONALIDADES AVANÇADAS**

### Armazenamento:
- **LocalStorage**: Configurações salvas automaticamente
- **Sincronização**: Dados refletidos no site principal
- **Persistência**: Dados mantidos entre sessões

### Interface Responsiva:
- **Desktop**: Layout completo com sidebar
- **Tablet**: Interface adaptada para telas médias
- **Mobile**: Layout otimizado para touch

### Validações:
- **Campos Obrigatórios**: Nome, descrição, categoria
- **Cores**: Pelo menos uma cor deve ser selecionada
- **Imagens**: Validação de tipo e tamanho
- **Duplicatas**: Nomes de categorias devem ser únicos

## 🛠️ **SOLUÇÃO DE PROBLEMAS**

### Imagem não carrega:
- ✅ Verifique o formato (PNG, JPG)
- ✅ Confirme o tamanho (máx. 5MB)
- ✅ Tente recarregar a página

### Configurações não salvam:
- ✅ Verifique se o navegador permite LocalStorage
- ✅ Limpe o cache se necessário
- ✅ Tente em modo privado/incógnito

### Cores não aparecem:
- ✅ Selecione pelo menos uma cor
- ✅ Recarregue o site principal
- ✅ Verifique se a categoria está correta

### Backup não importa:
- ✅ Verifique se é um arquivo JSON válido
- ✅ Confirme que contém a estrutura correta
- ✅ Tente exportar um novo backup

## 📱 **COMPATIBILIDADE**

### Navegadores Suportados:
- ✅ Chrome 80+
- ✅ Firefox 75+
- ✅ Safari 13+
- ✅ Edge 80+

### Dispositivos:
- ✅ Desktop (Windows, Mac, Linux)
- ✅ Tablet (iPad, Android)
- ✅ Mobile (iOS, Android)

## 🎯 **BOAS PRÁTICAS**

### Organização:
- **Categorias**: Use nomes descritivos e consistentes
- **Imagens**: Mantenha qualidade e proporção
- **Descrições**: Seja claro e objetivo
- **Cores**: Ofereça variedade quando apropriado

### Performance:
- **Imagens**: Otimize antes do upload
- **Backup**: Exporte regularmente
- **Limpeza**: Remova itens não utilizados

### Backup:
- ✅ Exporte antes de mudanças importantes
- ✅ Mantenha cópias em locais seguros
- ✅ Teste a importação periodicamente

## 🚨 **IMPORTANTE**

⚠️ **Aviso**: Este painel gerencia apenas as configurações do site. As reservas de presentes e confirmações de presença são feitas pelos convidados no site principal e são independentes.

⚠️ **Backup**: Sempre exporte um backup antes de fazer mudanças significativas.

⚠️ **Imagens**: As imagens são armazenadas como base64 no navegador. Para maior estabilidade, considere hospedar imagens externamente.

---

## 🎉 **CONCLUSÃO**

O Painel Administrativo oferece controle total sobre o site do chá de panela, permitindo gestão profissional e independente. Com interface intuitiva e funcionalidades completas, facilita a manutenção e customização do site.

**Dúvidas?** Consulte a documentação técnica ou entre em contato com o suporte.