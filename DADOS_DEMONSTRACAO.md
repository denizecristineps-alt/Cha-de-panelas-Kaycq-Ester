# 🧪 Dados de Demonstração - Confirmações

## 📋 **COMO ADICIONAR DADOS DE EXEMPLO**

Para testar a aba "Confirmações" no painel administrativo, adicione estas confirmações de exemplo no console do navegador:

### **Passo 1**: Abrir o Site Principal
1. Abra `index.html` no navegador
2. Pressione **F12** para abrir o Console do Desenvolvedor
3. Cole o código abaixo e pressione **Enter**

### **Passo 2**: Adicionar Confirmações de Exemplo

```javascript
// Dados de demonstração para RSVPs
const demoRSVPs = [
    {
        id: 1,
        name: "Maria Silva",
        attendance: "yes",
        phone: "(11) 99999-1111",
        email: "maria.silva@email.com",
        selectedGift: "1",
        message: "Que vocês sejam muito felizes! Mal posso esperar para ver a casa de vocês.",
        timestamp: "2025-12-08T14:30:00.000Z"
    },
    {
        id: 2,
        name: "João Santos",
        attendance: "yes", 
        phone: "(11) 99999-2222",
        email: "joao.santos@email.com",
        selectedGift: "5",
        message: "Parabéns! Escolhi o mixer, espero que seja útil na nova casa.",
        timestamp: "2025-12-08T16:45:00.000Z"
    },
    {
        id: 3,
        name: "Ana Costa",
        attendance: "yes",
        phone: "(11) 99999-3333", 
        email: "ana.costa@email.com",
        selectedGift: "15",
        message: "Que seja o início de uma vida cheia de amor e alegria!",
        timestamp: "2025-12-08T18:20:00.000Z"
    },
    {
        id: 4,
        name: "Carlos Oliveira",
        attendance: "no",
        phone: "(11) 99999-4444",
        email: "carlos.oliveira@email.com",
        selectedGift: "",
        message: "Infelizmente não poderei ir, mas estou torcendo muito por vocês!",
        timestamp: "2025-12-08T20:15:00.000Z"
    },
    {
        id: 5,
        name: "Fernanda Lima",
        attendance: "yes",
        phone: "(11) 99999-5555",
        email: "fernanda.lima@email.com", 
        selectedGift: "10",
        message: "Espero que gostem das toalhas! Beijo e até logo!",
        timestamp: "2025-12-09T09:30:00.000Z"
    },
    {
        id: 6,
        name: "Pedro Almeida",
        attendance: "yes",
        phone: "(11) 99999-6666",
        email: "pedro.almeida@email.com",
        selectedGift: "21",
        message: "Escolhi a TV 55 polegadas, vai ser ótima para os filmes de domingo!",
        timestamp: "2025-12-09T11:45:00.000Z"
    }
];

// Salvar no localStorage
localStorage.setItem('cha_panela_rsvps', JSON.stringify(demoRSVPs));

// Recarregar a página para ver as mudanças
location.reload();
```

### **Passo 3**: Verificar no Painel Admin
1. Abra `admin.html` no navegador
2. Vá para a aba **"Confirmações"**
3. Você deve ver:
   - **6 confirmações** no total
   - **5 confirmados** e **1 recusou**
   - **Cards individuais** com todas as informações
   - **Filtros funcionando**: teste a busca e filtros

---

## 🎯 **FUNCIONALIDADES PARA TESTAR**

### ✅ **Busca por Nome**
- Digite "Maria" → deve mostrar apenas Maria Silva
- Digite "Santos" → deve mostrar apenas João Santos
- Limpe a busca → deve mostrar todas novamente

### ✅ **Filtro por Status**
- Selecione "Confirmados" → deve mostrar 5 pessoas
- Selecione "Recusaram" → deve mostrar 1 pessoa
- Selecione "Todos os status" → deve mostrar todas

### ✅ **Informações nos Cards**
Cada card deve mostrar:
- **Nome** em destaque
- **Status** com cores (verde/vermelho)
- **Telefone e Email**
- **Presente escolhido** (se houver)
- **Mensagem pessoal** (se houver)
- **Data/Hora** da confirmação

### ✅ **Estatísticas**
O header deve mostrar:
- **Total: 6**
- **Confirmados: 5** 
- **Recusaram: 1**

---

## 🔄 **COMO LIMPAR OS DADOS**

Para remover as confirmações de exemplo:

```javascript
// Limpar localStorage
localStorage.removeItem('cha_panela_rsvps');

// Recarregar
location.reload();
```

---

## 📱 **TESTE COMPLETO**

### **Cenário de Uso Real:**
1. **Convidados fazem reservas** no site principal
2. **Enviam confirmações** com mensagens
3. **Você acessa o painel admin** → Aba "Confirmações"
4. **Visualiza todas as respostas** organizadas
5. **Filtra por status** para ver apenas confirmados
6. **Busca nomes específicos** para encontrar alguém
7. **Lê as mensagens** para ficar por dentro

### **Dashboard Atualizado:**
- As estatísticas do dashboard principal também são atualizadas
- Total de RSVPs no dashboard deve refletir os dados da aba Confirmações

---

## 🎊 **RESULTADO ESPERADO**

Com esses dados de exemplo, você terá uma visão completa de como o sistema funciona:

- ✅ **6 pessoas** confirmaram ou recusaram
- ✅ **Mensagens variadas** para ler
- ✅ **Presentes escolhidos** diferentes
- ✅ **Filtros e busca** funcionando
- ✅ **Interface responsiva** e profissional

**Agora é só testar e personalizar conforme sua necessidade!** 🚀