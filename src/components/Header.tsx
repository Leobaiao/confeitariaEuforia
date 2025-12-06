import { Menu, Heart, ShoppingBag, X } from 'lucide-react';
import { Button } from './ui/button';
import { useCart } from './CartContext';
import { useWishlist } from './WishlistContext';
import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';
import logoEuforia from '../assets/logo.png';

interface HeaderProps {
  wishlistOpen: boolean;
  setWishlistOpen: (open: boolean) => void;
}

export function Header({ wishlistOpen, setWishlistOpen }: HeaderProps) {
  const { toggleCart, getTotalItems } = useCart();
  const { getTotalItems: getWishlistItems } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-pink-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex items-center"
          >
            <div className="flex items-center space-x-3">
              <motion.img
                src={logoEuforia}
                alt="Euforia Confeitaria Artesanal"
                className="w-16 h-16 object-contain"
                whileHover={{ rotate: 360, scale: 1.1 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-3xl font-euforia bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent"
              >
                Euforia
              </motion.span>
            </div>
          </motion.div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-700 hover:text-pink-500 transition-colors">
              Início
            </a>
            <a href="#produtos" className="text-gray-700 hover:text-pink-500 transition-colors">
              Produtos
            </a>
            <a href="#sobre" className="text-gray-700 hover:text-pink-500 transition-colors">
              Sobre
            </a>
            <a href="#contato" className="text-gray-700 hover:text-pink-500 transition-colors">
              Contato
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            {/* Wishlist Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={() => setWishlistOpen(true)}
              className="hidden sm:flex items-center space-x-2 border-pink-200 text-pink-600 hover:bg-pink-50 relative"
            >
              <Heart className="w-4 h-4" />
              <span>Favoritos</span>
              {getWishlistItems() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {getWishlistItems()}
                </motion.span>
              )}
            </Button>

            {/* Cart Button */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleCart}
              className="hidden sm:flex items-center space-x-2 border-pink-200 text-pink-600 hover:bg-pink-50 relative"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Carrinho</span>
              {getTotalItems() > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center"
                >
                  {getTotalItems()}
                </motion.span>
              )}
            </Button>
            <Button
              className="md:hidden"
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white border-t border-pink-100 overflow-hidden"
          >
            <div className="px-4 py-4 space-y-4">
              <motion.a
                href="#inicio"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-pink-500 py-2 transition-colors"
                whileHover={{ x: 5 }}
              >
                Início
              </motion.a>
              <motion.a
                href="#produtos"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-pink-500 py-2 transition-colors"
                whileHover={{ x: 5 }}
              >
                Produtos
              </motion.a>
              <motion.a
                href="#sobre"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-pink-500 py-2 transition-colors"
                whileHover={{ x: 5 }}
              >
                Sobre
              </motion.a>
              <motion.a
                href="#contato"
                onClick={() => setMobileMenuOpen(false)}
                className="block text-gray-700 hover:text-pink-500 py-2 transition-colors"
                whileHover={{ x: 5 }}
              >
                Contato
              </motion.a>

              <div className="pt-4 border-t border-pink-100 space-y-3">
                <Button
                  onClick={() => {
                    setWishlistOpen(true);
                    setMobileMenuOpen(false);
                  }}
                  variant="outline"
                  className="w-full flex items-center justify-center space-x-2 border-pink-200 text-pink-600 hover:bg-pink-50 relative"
                >
                  <Heart className="w-4 h-4" />
                  <span>Favoritos</span>
                  {getWishlistItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                      {getWishlistItems()}
                    </span>
                  )}
                </Button>

                <Button
                  onClick={() => {
                    toggleCart();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-500 to-orange-400 hover:from-pink-600 hover:to-orange-500 relative"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Carrinho</span>
                  {getTotalItems() > 0 && (
                    <span className="absolute -top-2 -right-2 bg-white text-pink-500 text-xs w-5 h-5 rounded-full flex items-center justify-center font-medium">
                      {getTotalItems()}
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
