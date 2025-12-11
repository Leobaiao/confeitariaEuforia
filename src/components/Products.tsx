import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Heart, ShoppingCart, MessageCircle } from 'lucide-react';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import React from 'react';
import { products, formatPrice, type Product } from '../data/products';
import { WhatsAppModal } from './WhatsAppModal';

export function Products() {
  const { addToCart, openCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [showAll, setShowAll] = React.useState(false);
  const [loadingStates, setLoadingStates] = React.useState<Record<number, boolean>>({});

  // Estado para controlar o modal de WhatsApp
  const [whatsAppModalOpen, setWhatsAppModalOpen] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState<Product | null>(null);

  // Função para abrir o modal de compra via WhatsApp
  const handleBuyNow = React.useCallback((product: Product) => {
    setSelectedProduct(product);
    setWhatsAppModalOpen(true);
  }, []);

  const handleAddToCart = React.useCallback(async (product: Product) => {
    setLoadingStates(prev => ({ ...prev, [product.id]: true }));

    // Simular loading para melhor UX
    await new Promise(resolve => setTimeout(resolve, 500));

    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });

    toast.success(`${product.name} adicionado ao carrinho! 🛒`, {
      description: `${formatPrice(product.price)} - Aproveite nossos deliciosos doces`,
      action: {
        label: 'Ver carrinho',
        onClick: () => openCart()
      }
    });

    setLoadingStates(prev => ({ ...prev, [product.id]: false }));
  }, [addToCart, openCart]);

  const displayedProducts = showAll ? products : products.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleWishlistToggle = React.useCallback((product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
      toast.info(`${product.name} removido da lista de desejos`, {
        description: 'Item removido dos seus favoritos'
      });
    } else {
      addToWishlist({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image
      });
      toast.success(`${product.name} adicionado aos favoritos! ❤️`, {
        description: 'Acesse sua lista de desejos para ver todos os favoritos'
      });
    }
  }, [isInWishlist, addToWishlist, removeFromWishlist]);

  return (
    <>
      <section id="produtos" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent">
                Nossos Produtos
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Cada doce é preparado com ingredientes selecionados e muito amor,
              garantindo sabor e qualidade em cada mordida.
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {displayedProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                whileHover={{ y: -8 }}
                className="group"
              >
                <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 hover:ring-2 hover:ring-pink-200/50">
                  <div className="relative overflow-hidden">
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Overlay gradiente no hover */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                    {product.popular && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3 + index * 0.1, type: "spring", stiffness: 500 }}
                        className="absolute top-3 left-3 bg-gradient-to-r from-pink-500 to-orange-400 text-white px-3 py-1 rounded-full text-sm font-medium z-10"
                      >
                        Popular
                      </motion.div>
                    )}

                    <motion.button
                      whileHover={{ scale: 1.15 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleWishlistToggle(product)}
                      aria-label={isInWishlist(product.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
                      className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:shadow-lg z-10"
                    >
                      <Heart
                        className={`w-5 h-5 transition-colors duration-200 ${isInWishlist(product.id)
                          ? 'text-pink-500 fill-pink-500'
                          : 'text-gray-600 hover:text-pink-500'
                          }`}
                      />
                    </motion.button>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm text-gray-600 ml-1">{product.rating}</span>
                      </div>
                      <span className="text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded-full">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex flex-col gap-3">
                      <span className="text-2xl font-bold text-pink-500">
                        {formatPrice(product.price)}
                      </span>

                      <div className="flex gap-2">
                        <motion.div
                          whileTap={{ scale: 0.95 }}
                          className="flex-1"
                        >
                          <Button
                            size="sm"
                            onClick={() => handleAddToCart(product)}
                            disabled={loadingStates[product.id]}
                            aria-label={`Adicionar ${product.name} ao carrinho`}
                            className="w-full bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 disabled:opacity-50"
                          >
                            {loadingStates[product.id] ? (
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                                className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                              />
                            ) : (
                              <>
                                <ShoppingCart className="w-4 h-4 mr-1" />
                                Adicionar
                              </>
                            )}
                          </Button>
                        </motion.div>

                        <motion.div whileTap={{ scale: 0.95 }}>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleBuyNow(product)}
                            aria-label={`Comprar ${product.name} via WhatsApp`}
                            className="px-3 border-green-500 text-green-600 hover:bg-green-50 hover:border-green-600"
                          >
                            <MessageCircle className="w-4 h-4 mr-1" />
                            Comprar
                          </Button>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const isExpanding = !showAll;
                toggleShowAll();

                if (!isExpanding) {
                  setTimeout(() => {
                    document.getElementById('produtos')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'end'
                    });
                  }, 150);
                }
              }}
              className="border-pink-200 text-pink-600 hover:bg-pink-50"
            >
              {showAll ? 'Ver Menos Produtos' : 'Ver Todos os Produtos'}
            </Button>
          </div>
        </div>
      </section>

      {/* Modal de WhatsApp */}
      <WhatsAppModal
        isOpen={whatsAppModalOpen}
        onClose={() => setWhatsAppModalOpen(false)}
        product={selectedProduct}
      />
    </>
  );
}
