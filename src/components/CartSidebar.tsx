import { useCart } from './CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './ui/sheet';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Minus, Plus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { Separator } from './ui/separator';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppLink, REDES_SOCIAIS } from '../constants';

export function CartSidebar() {
  const {
    items,
    isOpen,
    closeCart,
    removeFromCart,
    updateQuantity,
    getTotalPrice
  } = useCart();

  const formatPrice = (price: number) => {
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  return (
    <Sheet open={isOpen} onOpenChange={closeCart}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-pink-500" />
            Seu Carrinho
            {items.length > 0 && (
              <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                {items.length}
              </span>
            )}
          </SheetTitle>
          <SheetDescription>
            Gerencie os itens do seu carrinho de compras
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Carrinho vazio
              </h3>
              <p className="text-gray-500 mb-6">
                Adicione alguns doces deliciosos ao seu carrinho
              </p>
              <Button
                onClick={closeCart}
                className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500"
              >
                Continuar Comprando
              </Button>
            </div>
          ) : (
            <>
              {/* Cart Items */}
              <div className="flex-1 overflow-auto py-6">
                <div className="space-y-4">
                  <AnimatePresence>
                    {items.map((item, index) => (
                      <motion.div
                        key={item.id}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20, height: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow"
                      >
                        <ImageWithFallback
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-16 object-cover rounded-lg flex-shrink-0"
                        />

                        <div className="flex-1 space-y-2">
                          <h4 className="font-medium text-gray-800">{item.name}</h4>
                          <p className="text-pink-500 font-semibold">{item.price}</p>

                          <div className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <motion.div whileTap={{ scale: 0.9 }}>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                  className="w-8 h-8 p-0 hover:bg-pink-50"
                                >
                                  <Minus className="w-3 h-3" />
                                </Button>
                              </motion.div>

                              <span className="w-8 text-center font-medium">
                                {item.quantity}
                              </span>

                              <motion.div whileTap={{ scale: 0.9 }}>
                                <Button
                                  size="sm"
                                  variant="outline"
                                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                  className="w-8 h-8 p-0 hover:bg-pink-50"
                                >
                                  <Plus className="w-3 h-3" />
                                </Button>
                              </motion.div>
                            </div>

                            <motion.div whileTap={{ scale: 0.9 }}>
                              <Button
                                size="sm"
                                variant="ghost"
                                onClick={() => removeFromCart(item.id)}
                                className="text-red-500 hover:text-red-700 hover:bg-red-50"
                              >
                                <Trash2 className="w-4 h-4" />
                              </Button>
                            </motion.div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
              </div>

              {/* Footer */}
              <div className="border-t pt-6 space-y-4">
                {/* Cupom de desconto */}
                <div className="p-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 mb-2">Tem um cupom de desconto?</p>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Digite seu cupom"
                      className="flex-1 px-3 py-2 text-sm border border-pink-200 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                    />
                    <Button size="sm" variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                      Aplicar
                    </Button>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Subtotal:</span>
                    <span>{formatPrice(getTotalPrice())}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Entrega:</span>
                    <span className="text-green-600">Grátis</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold">Total:</span>
                    <span className="text-2xl font-bold text-pink-500">
                      {formatPrice(getTotalPrice())}
                    </span>
                  </div>
                </div>

                <div className="space-y-3">
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700"
                      size="lg"
                      onClick={() => {
                        // Montar mensagem do WhatsApp com os itens do carrinho
                        const itemsList = items.map(item =>
                          `• ${item.name} - ${item.quantity}x - ${item.price}`
                        ).join('\n');

                        const total = formatPrice(getTotalPrice());

                        const message = `Olá! 🍰 Gostaria de fazer um pedido:\n\n${itemsList}\n\n💰 *Total: ${total}*\n\n📍 Meu endereço:\n[Preencha seu endereço aqui]\n\n📱 Meu telefone:\n[Preencha seu telefone aqui]`;

                        // Abrir WhatsApp com a mensagem
                        window.open(getWhatsAppLink(message), '_blank');

                        // Fechar o carrinho
                        closeCart();
                      }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Pedir pelo WhatsApp
                    </Button>
                  </motion.div>

                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500"
                      size="lg"
                      onClick={() => {
                        // Redirecionar para o iFood
                        window.open(REDES_SOCIAIS.IFOOD, '_blank');
                      }}
                    >
                      <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
                      </svg>
                      Pedir pelo iFood
                    </Button>
                  </motion.div>

                  <Button
                    variant="outline"
                    className="w-full border-pink-200 text-pink-600 hover:bg-pink-50"
                    onClick={closeCart}
                  >
                    Continuar Comprando
                  </Button>
                </div>
              </div>
            </>
          )}
        </div>
      </SheetContent>
    </Sheet>
  );
}
