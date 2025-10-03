import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CartProvider } from './components/CartContext';
import { WishlistProvider } from './components/WishlistContext';
import { CartSidebar } from './components/CartSidebar';
import { WishlistSidebar } from './components/WishlistSidebar';
import { FloatingIFood } from './components/FloatingIFood';
import { Toaster } from './components/ui/sonner';
import React from 'react';

export default function App() {
  const [wishlistOpen, setWishlistOpen] = React.useState(false);

  return (
    <WishlistProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Header 
            wishlistOpen={wishlistOpen} 
            setWishlistOpen={setWishlistOpen} 
          />
          <main>
            <Hero />
            <Products />
            <About />
            <Contact />
          </main>
          <Footer />
          <CartSidebar />
          <WishlistSidebar 
            isOpen={wishlistOpen} 
            onClose={() => setWishlistOpen(false)} 
          />
          <FloatingIFood />
          <Toaster 
            position="top-right"
            closeButton
            toastOptions={{
              style: {
                background: 'linear-gradient(to right, #ec4899, #fb923c)',
                color: 'white',
                border: 'none'
              },
              closeButtonStyle: {
                background: 'rgba(255, 255, 255, 0.2)',
                color: 'white',
                border: 'none',
                borderRadius: '50%',
                width: '20px',
                height: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '14px',
                fontWeight: 'bold',
                cursor: 'pointer',
                transition: 'background 0.2s ease'
              }
            }}
          />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}