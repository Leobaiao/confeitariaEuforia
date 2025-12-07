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
  // ============ BRIGADEIROS ============
  {
    id: 1,
    name: 'Brigadeiro Tradicional',
    description: 'O clássico brigadeiro brasileiro, feito com chocolate nobre e granulado crocante.',
    price: 'R$ 4,00',
    image: 'https://images.unsplash.com/photo-1541783245831-57d6fb0926d3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8YnJhemls%20aWFuJTIwYnJpZ2FkZWlyb3xlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    popular: true,
    category: 'Brigadeiros'
  },
  {
    id: 2,
    name: 'Brigadeiro Gourmet',
    description: 'Brigadeiros gourmet em sabores especiais: pistache, maracujá, limão siciliano e mais.',
    price: 'R$ 6,00',
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Z291cm1ldCUyMHRydWZmbGVzfGVufDF8fHx8MTc2NTA3MTUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    popular: true,
    category: 'Brigadeiros'
  },
  // ============ DOCINHOS ============
  {
    id: 3,
    name: 'Cento de Docinhos',
    description: 'Kit com 100 docinhos variados: brigadeiros, beijinhos, cajuzinhos e bicho de pé.',
    price: 'R$ 180,00',
    image: 'https://images.unsplash.com/photo-1572978577832-287ca6539e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiYWtlcnklMjBwYXN0cnklMjBkaXNwbGF5fGVufDF8fHx8MTc1OTQzODc1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    popular: true,
    category: 'Docinhos'
  },
  {
    id: 4,
    name: 'Docinhos Finos (25 un)',
    description: 'Seleção de 25 docinhos brasileiros gourmet para sua festa ou evento especial.',
    price: 'R$ 55,00',
    image: 'https://images.unsplash.com/photo-1558326567-98ae2405596b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8YnJhemlsaWFuJTIwc3dlZXRzfGVufDF8fHx8MTc2NTA3MTUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    popular: false,
    category: 'Docinhos'
  },
  // ============ BROWNIES ============
  {
    id: 5,
    name: 'Brownie Tradicional',
    description: 'Brownie denso e úmido com chocolate meio amargo, perfeito para os amantes de chocolate.',
    price: 'R$ 12,00',
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8YnJvd25pZXxlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    popular: true,
    category: 'Brownies'
  },
  {
    id: 6,
    name: 'Brownie com Nozes',
    description: 'Brownie gourmet com nozes crocantes e chocolate belga intenso.',
    price: 'R$ 15,00',
    image: 'https://images.unsplash.com/photo-1739667648859-5434b0d677ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHhicm93bmllcyUyMGNob2NvbGF0ZSUyMHNxdWFyZXN8ZW58MXx8fHwxNzU5NDQ3MzcyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    popular: false,
    category: 'Brownies'
  },
  {
    id: 7,
    name: 'Brownie de Nutella',
    description: 'Brownie recheado com Nutella cremosa e finalizado com avelãs.',
    price: 'R$ 18,00',
    image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8M3x8YnJvd25pZXxlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    popular: true,
    category: 'Brownies'
  },
  // ============ COOKIES ============
  {
    id: 8,
    name: 'Cookie de Chocolate',
    description: 'Cookie artesanal com gotas de chocolate belga e borda crocante.',
    price: 'R$ 10,00',
    image: 'https://images.unsplash.com/photo-1606406305144-0e2d8f91e61a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb29raWVzJTIwY2hvY29sYXRlJTIwY2hpcHxlbnwxfHx8fDE3NTk0NDczNzV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    popular: true,
    category: 'Cookies'
  },
  {
    id: 9,
    name: 'Cookie de Nutella',
    description: 'Cookie recheado com Nutella e finalizado com chocolate ao leite.',
    price: 'R$ 14,00',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8Y29va2llfGVufDF8fHx8MTc2NTA3MTUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    popular: false,
    category: 'Cookies'
  },
  {
    id: 10,
    name: 'Cookie Red Velvet',
    description: 'Cookie red velvet com gotas de chocolate branco e cobertura de cream cheese.',
    price: 'R$ 12,00',
    image: 'https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8NHx8cmVkJTIwdmVsdmV0fGVufDF8fHx8MTc2NTA3MTUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    popular: false,
    category: 'Cookies'
  },
  // ============ BOLOS ============
  {
    id: 11,
    name: 'Bolo de Chocolate',
    description: 'Irresistível bolo de chocolate com cobertura cremosa e raspas de chocolate amargo.',
    price: 'R$ 85,00',
    image: 'https://images.unsplash.com/photo-1700448293876-07dca826c161?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjBjYWtlJTIwc2xpY2V8ZW58MXx8fHwxNzU5MzczOTg2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    popular: true,
    category: 'Bolos'
  },
  {
    id: 12,
    name: 'Bolo de Cenoura',
    description: 'Clássico bolo de cenoura brasileiro com cobertura de chocolate cremosa.',
    price: 'R$ 75,00',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y2Fycm90JTIwY2FrZXxlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    popular: true,
    category: 'Bolos'
  },
  {
    id: 13,
    name: 'Bolo de Aniversário',
    description: 'Bolos personalizados para ocasiões especiais, decorados com muito carinho.',
    price: 'R$ 120,00',
    image: 'https://images.unsplash.com/photo-1622576890453-8e50b6f7d5b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYWtlJTIwYmlydGhkYXklMjBjb2xvcmZ1bHxlbnwxfHx8fDE3NTk0NDU5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 5.0,
    popular: false,
    category: 'Bolos'
  },
  {
    id: 14,
    name: 'Bolo Red Velvet',
    description: 'Elegante bolo red velvet com camadas de cream cheese e decoração especial.',
    price: 'R$ 95,00',
    image: 'https://images.unsplash.com/photo-1586788680434-30d324b2d46f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8cmVkJTIwdmVsdmV0JTIwY2FrZXxlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    popular: false,
    category: 'Bolos'
  },
  // ============ SLICE CAKES ============
  {
    id: 15,
    name: 'Slice Cake Chocolate',
    description: 'Fatia generosa de bolo de chocolate com ganache e frutas vermelhas.',
    price: 'R$ 18,00',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y2hvY29sYXRlJTIwY2FrZSUyMHNsaWNlfGVufDF8fHx8MTc2NTA3MTUwMHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    popular: false,
    category: 'Slice Cakes'
  },
  {
    id: 16,
    name: 'Slice Cake Red Velvet',
    description: 'Fatia do nosso famoso red velvet com cream cheese frosting.',
    price: 'R$ 20,00',
    image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8cmVkJTIwdmVsdmV0JTIwc2xpY2V8ZW58MXx8fHwxNzY1MDcxNTAwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    popular: true,
    category: 'Slice Cakes'
  },
  {
    id: 17,
    name: 'Slice Cake Cenoura',
    description: 'Fatia do tradicional bolo de cenoura com cobertura de chocolate.',
    price: 'R$ 15,00',
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Y2Fycm90JTIwY2FrZXxlbnwxfHx8fDE3NjUwNzE1MDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.7,
    popular: false,
    category: 'Slice Cakes'
  },
  // ============ OUTROS ============
  {
    id: 18,
    name: 'Macarons Especiais',
    description: 'Deliciosos macarons franceses em sabores únicos como lavanda, rosa e frutas.',
    price: 'R$ 45,00',
    image: 'https://images.unsplash.com/photo-1582189649350-408b60a104b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaW5rJTIwbWFjYXJvbnMlMjBkZXNzZXJ0fGVufDF8fHx8MTc1OTQ0NTk3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    popular: false,
    category: 'Outros'
  },
  {
    id: 19,
    name: 'Cupcakes Artesanais',
    description: 'Cupcakes fofos e saborosos com coberturas cremosas e decorações encantadoras.',
    price: 'R$ 12,00',
    image: 'https://images.unsplash.com/photo-1639098620661-3d47712d8a2a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xvcmZ1bCUyMGN1cGNha2VzJTIwYmFrZXJ5fGVufDF8fHx8MTc1OTM1NTM1OXww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.8,
    popular: false,
    category: 'Outros'
  },
  {
    id: 20,
    name: 'Trufas Premium',
    description: 'Trufas artesanais de chocolate belga com recheios variados e cobertura especial.',
    price: 'R$ 8,00',
    image: 'https://images.unsplash.com/photo-1729875749042-695a49842f6e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaG9jb2xhdGUlMjB0cnVmZmxlcyUyMGNhbmR5fGVufDF8fHx8MTc1OTQ0NzM2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    rating: 4.9,
    popular: false,
    category: 'Outros'
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
