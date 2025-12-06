import { Card } from './ui/card';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Star, Heart, ShoppingCart } from 'lucide-react';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import React from 'react';

const products = [
  {
    id: 1,
    name: 'Macarons Especiais',
    description: 'Deliciosos macarons franceses em sabores únicos como lavanda, rosa e frutas vermelhas.',
    price: 'R$ 45,00',
    image: 'https://images.unsplash.com/photo-1582189649350-408b60a104b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbWFjYXJvbnMlMjBkZXNzZXJ0fGVufDF8fHx8MTc1OTQ0NTk3MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.9,
    popular: true
  },
  {
    id: 2,
    name: 'Bolo de Aniversário',
    description: 'Bolos personalizados para ocasiões especiais, decorados com muito carinho e criatividade.',
    price: 'R$ 89,00',
    image: 'https://images.unsplash.com/photo-1622576890453-8e50b6f7d5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwYmlydGhkYXklMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTk0NDU5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 5.0,
    popular: false
  },
  {
    id: 3,
    name: 'Cupcakes Artesanais',
    description: 'Cupcakes fofos e saborosos com coberturas cremosas e decorações encantadoras.',
    price: 'R$ 12,00',
    image: 'https://images.unsplash.com/photo-1639098620661-3d47712d8a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGN1cGNha2VzJTIwYmFrZXJ5fGVufDF8fHx8MTc1OTM1NTM1OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.8,
    popular: true
  },
  {
    id: 4,
    name: 'Docinhos Finos',
    description: 'Seleção de docinhos brasileiros gourmet: brigadeiros, beijinhos e cajuzinhos especiais.',
    price: 'R$ 35,00',
    image: 'https://images.unsplash.com/photo-1572978577832-287ca6539e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cnklMjBkaXNwbGF5fGVufDF8fHx8MTc1OTQzODc1N3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.7,
    popular: false
  },
  {
    id: 5,
    name: 'Bolo de Chocolate',
    description: 'Irresistível bolo de chocolate com cobertura cremosa e raspas de chocolate amargo.',
    price: 'R$ 65,00',
    image: 'https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzU5MzczOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.9,
    popular: true
  },
  {
    id: 6,
    name: 'Torta de Morango',
    description: 'Deliciosa torta com base crocante, creme suave e morangos frescos selecionados.',
    price: 'R$ 58,00',
    image: 'https://images.unsplash.com/photo-1732638221415-75ab6519c590?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHJhd2JlcnJ5JTIwdGFydCUyMGRlc3NlcnR8ZW58MXx8fHwxNzU5NDQ3MzU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.8,
    popular: false
  },
  {
    id: 7,
    name: 'Trufas Premium',
    description: 'Trufas artesanais de chocolate belga com recheios variados e cobertura especial.',
    price: 'R$ 38,00',
    image: 'https://images.unsplash.com/photo-1729875749042-695a49842f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0cnVmZmxlcyUyMGNhbmR5fGVufDF8fHx8MTc1OTQ0NzM2Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.9,
    popular: true
  },
  {
    id: 8,
    name: 'Bolo de Limão',
    description: 'Refrescante bolo de limão siciliano com cobertura de cream cheese e raspas cítricas.',
    price: 'R$ 55,00',
    image: 'https://images.unsplash.com/photo-1678552882524-e94b282332e0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZW1vbiUyMGNha2UlMjBzbGljZXxlbnwxfHx8fDE3NTk0NDczNjR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.7,
    popular: false
  },
  {
    id: 9,
    name: 'Donuts Especiais',
    description: 'Donuts artesanais com massas fofas e coberturas coloridas em sabores exclusivos.',
    price: 'R$ 18,00',
    image: 'https://images.unsplash.com/photo-1604672857367-a0d662dfd7f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb251dHMlMjBjb2xvcmZ1bCUyMGdsYXplZHxlbnwxfHx8fDE3NTk0NDczNjd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.6,
    popular: false
  },
  {
    id: 10,
    name: 'Cupcakes de Baunilha',
    description: 'Clássicos cupcakes de baunilha com buttercream sedoso e decorações delicadas.',
    price: 'R$ 15,00',
    image: 'https://images.unsplash.com/photo-1587536849024-daaa4a417b16?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2YW5pbGxhJTIwY3VwY2FrZXMlMjBmcm9zdGluZ3xlbnwxfHx8fDE3NTk0NDczNjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.8,
    popular: false
  },
  {
    id: 11,
    name: 'Brownies Gourmet',
    description: 'Brownies densos e úmidos com chocolate meio amargo e nozes crocantes.',
    price: 'R$ 25,00',
    image: 'https://images.unsplash.com/photo-1739667648859-5434b0d677ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhicm93bmllcyUyMGNob2NvbGF0ZSUyMHNxdWFyZXN8ZW58MXx8fHwxNzU5NDQ3MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.7,
    popular: false
  },
  {
    id: 12,
    name: 'Cookies Premium',
    description: 'Cookies crocantes com gotas de chocolate belga e toque de flor de sal.',
    price: 'R$ 22,00',
    image: 'https://images.unsplash.com/photo-1606406305144-0e2d8f91e61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raWVzJTIwY2hvY29sYXRlJTIwY2hpcHxlbnwxfHx8fDE3NTk0NDczNzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    rating: 4.6,
    popular: false
  }
];

export function Products() {
  const { addToCart } = useCart();
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();
  const [showAll, setShowAll] = React.useState(false);
  const [loadingStates, setLoadingStates] = React.useState<Record<number, boolean>>({});

  const handleAddToCart = React.useCallback(async (product: typeof products[0]) => {
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
      description: `${product.price} - Aproveite nossos deliciosos doces`
    });

    setLoadingStates(prev => ({ ...prev, [product.id]: false }));
  }, [addToCart]);

  const displayedProducts = showAll ? products : products.slice(0, 4);

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  const handleWishlistToggle = React.useCallback((product: typeof products[0]) => {
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
                  </div>

                  <h3 className="text-lg font-semibold mb-2 text-gray-800 group-hover:text-pink-600 transition-colors duration-300">
                    {product.name}
                  </h3>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {product.description}
                  </p>

                  <div className="flex flex-col gap-3">
                    <span className="text-2xl font-bold text-pink-500">
                      {product.price}
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
                          className="px-3 border-pink-200 text-pink-600 hover:bg-pink-50"
                        >
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
  );
}
