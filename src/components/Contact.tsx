import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, UtensilsCrossed } from 'lucide-react';
import { useWishlist } from './WishlistContext';
import React from 'react';

export function Contact() {
  // Número do WhatsApp da Euforia
  const phoneNumber = "5511992232935"; // Formato internacional sem espaços ou símbolos
  const formattedPhone = "(11) 99223-2935"; // Formato para exibição

  // Estado para controlar o campo de produto
  const [productType, setProductType] = React.useState('');

  // Hook da wishlist
  const { items: wishlistItems } = useWishlist();

  // Função para preencher com produtos da wishlist
  const fillFromWishlist = () => {
    if (wishlistItems.length === 0) {
      alert('❤️ Sua lista de favoritos está vazia!\n\nAdicione alguns produtos aos favoritos clicando no ❤️ e depois volte aqui.');
      return;
    }

    const productNames = wishlistItems.map(item => item.name).join(', ');
    setProductType(productNames);
  };

  return (
    <section id="contato" className="py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para criar o doce perfeito para o seu momento especial.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
          {/* Contact Form */}
          <Card className="p-3 sm:p-4 md:p-6 lg:p-8 border-0 shadow-lg">
            <h3 className="text-lg sm:text-xl md:text-2xl font-semibold mb-3 sm:mb-4 md:mb-6 text-gray-800">
              Faça sua Encomenda
            </h3>

            <form className="space-y-4 sm:space-y-6">
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Nome
                  </label>
                  <Input name="nome" placeholder="Seu nome" className="text-sm sm:text-base" />
                </div>
                <div>
                  <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                    Telefone
                  </label>
                  <Input name="telefone" placeholder="(11) 99999-9999" className="text-sm sm:text-base" />
                </div>
              </div>

              <div>
                <label className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2 gap-1">
                  <span>Tipo de Produto</span>
                  <button
                    type="button"
                    className="text-xs text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1 hover:underline transition-colors"
                    onClick={fillFromWishlist}
                  >
                    ❤️ Wishlist {wishlistItems.length > 0 && `(${wishlistItems.length})`}
                  </button>
                </label>
                <Input
                  name="produto"
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  placeholder="Ex: Bolo, cupcakes..."
                  className="text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-medium text-gray-700 mb-1 sm:mb-2">
                  Mensagem
                </label>
                <Textarea
                  name="mensagem"
                  placeholder="Detalhes do seu pedido..."
                  rows={3}
                  className="text-sm sm:text-base"
                />
              </div>

              <Button
                type="button"
                onClick={() => {
                  // Usar o número definido no topo do componente

                  // Capturar dados do formulário
                  const form = document.querySelector('form');
                  if (!form) return; // Exit early if form not found
                  const formData = new FormData(form);
                  const nome = formData.get('nome') || 'Não informado';
                  const telefone = formData.get('telefone') || 'Não informado';
                  const produto = productType || 'Não informado';
                  const mensagem = formData.get('mensagem') || 'Não informado';

                  // Formatear mensagem para WhatsApp
                  const message = `🍰 *Olá, Euforia!*
Gostaria de solicitar um orçamento:
👤 *Nome:* ${nome}
📱 *Telefone:* ${telefone}
🎂 *Produto(s):* ${produto}
💬 *Detalhes:*
${mensagem}
Aguardo retorno! ❤️`;

                  // Codificar a mensagem para URL
                  const encodedMessage = encodeURIComponent(message);

                  // Abrir WhatsApp
                  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
                  window.open(whatsappURL, '_blank');
                }}
                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500"
                size="lg"
              >
                Enviar via WhatsApp
              </Button>
            </form>
          </Card>

          {/* Contact Info */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8">
            {/* Location & Hours */}
            <Card className="p-3 sm:p-4 md:p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 text-gray-800">Localização</h4>
                  <p className="text-xs sm:text-sm md:text-base text-gray-600">
                    R. Dr. Gastão Vidigal, 88<br />
                    Jardim Guarulhos, Guarulhos - SP<br />
                    CEP: 07090-150
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-3 sm:p-4 md:p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-2 sm:space-x-3 md:space-x-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 text-gray-800">Horário</h4>
                  <div className="text-xs sm:text-sm md:text-base text-gray-600 space-y-0.5 sm:space-y-1">
                    <p>Seg-Sex: 8h-18h</p>
                    <p>Sáb: 8h-16h</p>
                    <p>Dom: 9h-15h</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              <Card className="p-2 sm:p-3 md:p-6 border-0 shadow-lg text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-4">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-0.5 sm:mb-1 md:mb-2 text-gray-800 text-xs sm:text-sm md:text-base">Telefone</h4>
                <p className="text-gray-600 text-[10px] sm:text-xs md:text-base">{formattedPhone}</p>
              </Card>

              <Card className="p-2 sm:p-3 md:p-6 border-0 shadow-lg text-center">
                <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-1 sm:mb-2 md:mb-4">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-0.5 sm:mb-1 md:mb-2 text-gray-800 text-xs sm:text-sm md:text-base">E-mail</h4>
                <p className="text-gray-600 text-[10px] sm:text-xs md:text-base break-all">contato@euforia.com.br</p>
              </Card>
            </div>

            {/* Social Media */}
            <Card className="p-3 sm:p-4 md:p-6 border-0 shadow-lg">
              <h4 className="text-sm sm:text-base md:text-lg font-semibold mb-2 sm:mb-3 md:mb-4 text-gray-800 text-center">
                Redes Sociais
              </h4>
              <div className="grid grid-cols-3 gap-1.5 sm:gap-2 md:gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://www.instagram.com/confeitariaeuforia/', '_blank')}
                  className="border-pink-200 text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-105 px-2 sm:px-3 text-xs sm:text-sm"
                >
                  <Instagram className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Instagram</span>
                  <span className="sm:hidden">Instagram</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://www.facebook.com/euforia.confeitaria', '_blank')}
                  className="border-pink-200 text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-105 px-2 sm:px-3 text-xs sm:text-sm"
                >
                  <Facebook className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  <span className="hidden sm:inline">Facebook</span>
                  <span className="sm:hidden">Facebook</span>
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => window.open('https://www.ifood.com.br/delivery/sao-paulo-sp/euforia-confeitaria', '_blank')}
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 transition-all duration-300 hover:scale-105 px-2 sm:px-3 text-xs sm:text-sm"
                >
                  <UtensilsCrossed className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                  iFood
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
