import { useWishlist } from './WishlistContext';
import { useCart } from './CartContext';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from './ui/sheet';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Heart, Trash2, ShoppingCart, Star } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { toast } from 'sonner@2.0.3';
import React from 'react';

interface WishlistSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export function WishlistSidebar({ isOpen, onClose }: WishlistSidebarProps) {
  const { items, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const handleAddToCart = (item: typeof items[0]) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image
    });
    
    toast.success(`${item.name} adicionado ao carrinho! 🛒`, {
      description: 'Item movido da wishlist para o carrinho'
    });
  };

  const handleRemoveFromWishlist = (item: typeof items[0]) => {
    removeFromWishlist(item.id);
    toast.info(`${item.name} removido dos favoritos`, {
      description: 'Item removido da sua lista de desejos'
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-pink-500 fill-pink-500" />
            Lista de Desejos
            {items.length > 0 && (
              <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                {items.length}
              </span>
            )}
          </SheetTitle>
          <SheetDescription>
            Seus produtos favoritos salvos para depois
          </SheetDescription>
        </SheetHeader>

        <div className="flex flex-col h-full">
          {items.length === 0 ? (
            <div className="flex-1 flex flex-col items-center justify-center text-center py-12">
              <Heart className="w-16 h-16 text-gray-300 mb-4" />
              <h3 className="text-lg font-semibold text-gray-600 mb-2">
                Lista vazia
              </h3>
              <p className="text-gray-500 mb-6">
                Adicione produtos aos favoritos clicando no ❤️
              </p>
              <Button 
                onClick={onClose}
                className="bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500"
              >
                Explorar Produtos
              </Button>
            </div>
          ) : (
            <>
              {/* Wishlist Items */}
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
                        className="flex gap-4 p-4 border border-gray-100 rounded-lg hover:shadow-md transition-shadow group"
                      >
                        <div className="relative">
                          <ImageWithFallback
                            src={item.image}
                            alt={item.name}
                            className="w-20 h-20 object-cover rounded-lg flex-shrink-0"
                          />
                          {/* Overlay com ações rápidas */}
                          <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleAddToCart(item)}
                              className="bg-white/90 p-2 rounded-full hover:bg-white transition-colors"
                            >
                              <ShoppingCart className="w-4 h-4 text-pink-500" />
                            </motion.button>
                          </div>
                        </div>
                      
                        <div className="flex-1 space-y-2">
                          <h4 className="font-medium text-gray-800 group-hover:text-pink-600 transition-colors">
                            {item.name}
                          </h4>
                          <p className="text-pink-500 font-semibold text-lg">
                            {item.price}
                          </p>
                          
                          {/* Avaliação fictícia */}
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-400 fill-current" />
                            ))}
                            <span className="text-xs text-gray-500 ml-1">4.8</span>
                          </div>
                          
                          <div className="flex gap-2 mt-3">
                            <motion.div whileTap={{ scale: 0.95 }} className="flex-1">
                              <Button 
                                size="sm"
                                onClick={() => handleAddToCart(item)}
                                className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500"
                              >
                                <ShoppingCart className="w-4 h-4 mr-1" />
                                Adicionar
                              </Button>
                            </motion.div>
                            
                            <motion.div whileTap={{ scale: 0.95 }}>
                              <Button
                                size="sm"
                                variant="outline"
                                onClick={() => handleRemoveFromWishlist(item)}
                                className="px-3 border-red-200 text-red-600 hover:bg-red-50"
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
                <div className="p-3 bg-gradient-to-r from-pink-50 to-orange-50 rounded-lg">
                  <p className="text-sm text-gray-600 text-center">
                    💡 <strong>Dica:</strong> Adicione todos ao carrinho de uma vez!
                  </p>
                </div>

                <div className="space-y-3">
                  <motion.div whileTap={{ scale: 0.98 }}>
                    <Button 
                      className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500"
                      size="lg"
                      onClick={() => {
                        items.forEach(item => handleAddToCart(item));
                        toast.success(`${items.length} itens adicionados ao carrinho! 🛒`);
                      }}
                      disabled={items.length === 0}
                    >
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Adicionar Todos ao Carrinho
                    </Button>
                  </motion.div>
                  
                  <Button 
                    variant="outline" 
                    className="w-full border-pink-200 text-pink-600 hover:bg-pink-50"
                    onClick={onClose}
                  >
                    Continuar Navegando
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