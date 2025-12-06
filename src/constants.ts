// ============================================
// CONFIGURAÇÕES DA CONFEITARIA EUFORIA
// Altere os valores aqui para atualizar em todo o site
// ============================================

export const CONTATO = {
    // WhatsApp (formato internacional, sem + ou espaços)
    WHATSAPP_NUMERO: '5511992232935',

    // Telefone formatado para exibição
    TELEFONE_FORMATADO: '(11) 99223-2935',

    // Email
    EMAIL: 'confeitariaeuforia@gmail.com',

    // Endereço
    ENDERECO: {
        RUA: 'R. Dr. Gastão Vidigal, 88',
        BAIRRO: 'Jardim Guarulhos',
        CIDADE: 'Guarulhos - SP',
        CEP: '07090-150',
    },

    // Link do Google Maps
    GOOGLE_MAPS_URL: 'https://www.google.com/maps/place/Confeitaria+Euforia/@-23.4693788,-46.5342802,21z',
};

export const REDES_SOCIAIS = {
    INSTAGRAM: 'https://www.instagram.com/confeitariaeuforia/',
    FACEBOOK: 'https://www.facebook.com/euforia.confeitaria',
    IFOOD: 'https://www.ifood.com.br/delivery/sao-paulo-sp/euforia-confeitaria',
};

// Função helper para gerar link do WhatsApp
export const getWhatsAppLink = (mensagem?: string) => {
    const baseUrl = `https://wa.me/${CONTATO.WHATSAPP_NUMERO}`;
    if (mensagem) {
        return `${baseUrl}?text=${encodeURIComponent(mensagem)}`;
    }
    return baseUrl;
};
