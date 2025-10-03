import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, UtensilsCrossed } from 'lucide-react';
import { useWishlist } from './WishlistContext';
import React from 'react';

export function Contact() {
  // Número do WhatsApp da Euforia
  const phoneNumber = "5511999999999"; // Formato internacional sem espaços ou símbolos
  const formattedPhone = "(11) 99999-9999"; // Formato para exibição
  
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
    <section id="contato" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
              Entre em Contato
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Estamos prontos para criar o doce perfeito para o seu momento especial. 
            Entre em contato conosco!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="p-8 border-0 shadow-lg">
            <h3 className="text-2xl font-semibold mb-6 text-gray-800">
              Faça sua Encomenda
            </h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Nome
                  </label>
                  <Input name="nome" placeholder="Seu nome completo" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <Input name="telefone" placeholder="(11) 99999-9999" />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  E-mail
                </label>
                <Input name="email" type="email" placeholder="seu@email.com" />
              </div>
              
              <div>
                <label className="flex items-center justify-between text-sm font-medium text-gray-700 mb-2">
                  <span>Tipo de Produto</span>
                  <button
                    type="button"
                    className="text-xs text-pink-600 hover:text-pink-700 font-medium flex items-center gap-1 hover:underline transition-colors"
                    onClick={fillFromWishlist}
                  >
                    ❤️ Usar da Wishlist {wishlistItems.length > 0 && `(${wishlistItems.length})`}
                  </button>
                </label>
                <Input 
                  name="produto" 
                  value={productType}
                  onChange={(e) => setProductType(e.target.value)}
                  placeholder="Ex: Bolo de aniversário, cupcakes, docinhos..." 
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <Textarea 
                  name="mensagem"
                  placeholder="Conte-nos mais detalhes sobre o que você deseja..."
                  rows={4}
                />
              </div>
              
              <Button 
                type="button" 
                onClick={() => {
                  // Usar o número definido no topo do componente
                  
                  // Capturar dados do formulário
                  const form = document.querySelector('form');
                  const formData = new FormData(form);
                  const nome = formData.get('nome') || 'Não informado';
                  const telefone = formData.get('telefone') || 'Não informado';
                  const email = formData.get('email') || 'Não informado';
                  const produto = productType || 'Não informado';
                  const mensagem = formData.get('mensagem') || 'Não informado';
                  
                  // Formatear mensagem para WhatsApp
                  const message = `🍰 *Olá, Euforia!*

Gostaria de fazer um orçamento:

👤 *Nome:* ${nome}
📱 *Telefone:* ${telefone}
📧 *E-mail:* ${email}
🎂 *Produto(s) de Interesse:* ${produto}

💬 *Mensagem:*
${mensagem}

Aguardo o contato! ❤️`;

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
          <div className="space-y-8">
            {/* Location & Hours */}
            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Localização</h4>
                  <p className="text-gray-600">
                    Rua das Flores, 123<br />
                    Jardim Primavera, São Paulo - SP<br />
                    CEP: 01234-567
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 border-0 shadow-lg">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-2 text-gray-800">Horário de Funcionamento</h4>
                  <div className="text-gray-600 space-y-1">
                    <p>Segunda a Sexta: 8h às 18h</p>
                    <p>Sábado: 8h às 16h</p>
                    <p>Domingo: 9h às 15h</p>
                  </div>
                </div>
              </div>
            </Card>

            {/* Contact Methods */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Card className="p-6 border-0 shadow-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-orange-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-800">Telefone</h4>
                <p className="text-gray-600">{formattedPhone}</p>
              </Card>

              <Card className="p-6 border-0 shadow-lg text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2 text-gray-800">E-mail</h4>
                <p className="text-gray-600">contato@euforia.com.br</p>
              </Card>
            </div>

            {/* Social Media */}
            <Card className="p-6 border-0 shadow-lg">
              <h4 className="text-lg font-semibold mb-4 text-gray-800 text-center">
                Siga-nos nas Redes Sociais
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open('https://www.instagram.com/confeitariaeuforia/', '_blank')}
                  className="border-pink-200 text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-105"
                >
                  <Instagram className="w-4 h-4 mr-2" />
                  Instagram
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open('https://www.facebook.com/euforia.confeitaria', '_blank')}
                  className="border-pink-200 text-pink-600 hover:bg-pink-50 transition-all duration-300 hover:scale-105"
                >
                  <Facebook className="w-4 h-4 mr-2" />
                  Facebook
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  onClick={() => window.open('https://www.ifood.com.br/delivery/sao-paulo-sp/euforia-confeitaria', '_blank')}
                  className="border-orange-200 text-orange-600 hover:bg-orange-50 transition-all duration-300 hover:scale-105"
                >
                  <UtensilsCrossed className="w-4 h-4 mr-2" />
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