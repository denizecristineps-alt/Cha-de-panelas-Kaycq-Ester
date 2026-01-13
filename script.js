// Script Simplificado do Site do Chá de Panela
// Versão sem catálogo de presentes e banco de dados

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    initializeLucideIcons();
    initializeExternalLinks();
});

// Initialize Lucide icons
function initializeLucideIcons() {
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}

// Initialize external links from config
function initializeExternalLinks() {
    // Gift list link
    const giftLink = document.getElementById('giftLink');
    if (giftLink && SITE_CONFIG.giftList && SITE_CONFIG.giftList.externalUrl) {
        giftLink.href = SITE_CONFIG.giftList.externalUrl;
    }
    
    // WhatsApp link
    const whatsappLink = document.getElementById('whatsappLink');
    if (whatsappLink && SITE_CONFIG.contact && SITE_CONFIG.contact.whatsapp) {
        const phone = SITE_CONFIG.contact.whatsapp.replace(/\D/g, '');
        whatsappLink.href = `https://wa.me/${phone}`;
    }
    
    // Email link
    const emailLink = document.getElementById('emailLink');
    if (emailLink && SITE_CONFIG.contact && SITE_CONFIG.contact.email) {
        emailLink.href = `mailto:${SITE_CONFIG.contact.email}`;
    }
}

// Console log
console.log('🎉 Site do Chá de Panela carregado!');
