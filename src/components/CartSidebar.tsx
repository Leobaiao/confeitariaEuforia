import { useCart } from './CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './ui/sheet';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Minus, Plus, Trash2, ShoppingBag, CreditCard } from 'lucide-react';
import { Separator } from './ui/separator';
import { motion, AnimatePresence } from 'framer-motion';

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
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500"
                      size="lg"
                      onClick={() => {
                        // Simular processo de checkout
                        const total = formatPrice(getTotalPrice());
                        const itemCount = items.length;

                        // Fechar carrinho e mostrar mensagem de sucesso
                        closeCart();

                        // Simular tempo de processamento
                        setTimeout(() => {
                          alert(`🎉 Pedido confirmado!\n\n${itemCount} itens - Total: ${total}\n\nEm breve você receberá um email com os detalhes do pedido e informações de entrega.\n\nObrigado por escolher a Euforia! ❤️`);
                        }, 500);
                      }}
                    >
                      <CreditCard className="w-5 h-5 mr-2" />
                      Finalizar Pedido
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
