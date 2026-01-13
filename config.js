// Configuração do Site do Chá de Panela
// Versão Simplificada - Sem Banco de Dados

const SITE_CONFIG = {
    // Informações do Casal
    couple: {
        names: "Kaycq & Ester",
        heroTitle: "Kaycq & Ester",
        heroSubtitle: "Nosso Chá de Panela"
    },

    // Informações do Evento
    event: {
        date: "15 de Março, 2025",
        time: "14:00h",
        location: "Salão de Festas - Casa da Mãe",
        description: "Junte-se a nós para celebrar o início de uma nova jornada!"
    },

    // Link Externo da Lista de Presentes
    giftList: {
        enabled: true,
        externalUrl: "https://www.finalfeliz.de/ester-kaycq",
        storeName: "nossa loja parceira",
        instructions: "Separamos algumas sugestões para nos ajudar a montar nosso novo lar."
    },

    // Informações de Contato
    contact: {
        phone: "(21) 96624-8700",
        email: "kaycq.ester@email.com",
        whatsapp: "5521966248700"
    },

    // Configurações Visuais
    theme: {
        primaryColor: "#5D4037",
        primaryLight: "#D7CCC8",
        backgroundColor: "#FBF9F7",
        textDark: "#212121",
        textMedium: "#424242",
        successColor: "#2E7D32",
        warningColor: "#ED6C02",
        errorColor: "#D32F2F"
    },

    // Configurações de Comportamento
    behavior: {
        showSuccessModal: true,
        showToastNotifications: true,
        toastDuration: 5000,
        animationDuration: 300
    },

    // Textos Personalizados
    texts: {
        heroSubtitle: "Nosso Chá de Panela",
        giftListTitle: "Lista de Presentes",
        giftListSubtitle: "Separamos algumas sugestões para nos ajudar a montar nosso novo lar.",
        rsvpTitle: "Confirme sua Presença",
        rsvpDescription: "Não esqueça de confirmar sua presença para organizarmos tudo com carinho!",
        buttonTexts: {
            confirmPresence: "Confirmar Presença",
            submitForm: "Enviar Confirmação"
        },
        formLabels: {
            guestName: "Seu Nome Completo *",
            attendance: "Você poderá participar do evento? *",
            phone: "Telefone",
            email: "E-mail",
            message: "Deixe um recado para os noivos (opcional)"
        },
        formPlaceholders: {
            guestName: "Digite seu nome completo",
            phone: "(11) 99999-9999",
            email: "seu.email@exemplo.com",
            message: "Deixe uma mensagem especial para Kaycq e Ester..."
        },
        validationMessages: {
            requiredField: "Este campo é obrigatório",
            formSubmitted: "Confirmação enviada com sucesso!"
        },
        attendanceOptions: {
            yes: "Sim, estarei presente!",
            no: "Infelizmente não poderei ir"
        },
        // Mensagem sobre liberdade de compra
        freedomMessage: {
            title: "Sua presença é o que mais importa!",
            mainText: "Você NÃO é obrigado a comprar pelo site! Esta lista é apenas uma forma de facilitar a escolha do presente. Você pode comprar em qualquer loja, magazine, ou até mesmo nos entregar pessoalmente.",
            closingText: "O mais importante para nós é ter você conosco neste dia especial! Se preferir nos dar um mimo diferente ou vier de mãos vazias, será igualmente bem-vindo. 💕"
        },
        // Texto do botão da lista
        giftLinkButton: "Ver Lista na Loja",
        // Seções de contato alternativas
        alternativeSection: {
            title: "Outras formas de nos presentear",
            description: "Se preferir comprar em outra loja ou nos entregar pessoalmente,",
            contactInstruction: "basta entrar em contato conosco:"
        }
    }
};

// Exportar para uso global
if (typeof module !== 'undefined' && module.exports) {
    module.exports = SITE_CONFIG;
}