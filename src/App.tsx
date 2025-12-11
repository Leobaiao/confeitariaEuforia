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
import { ScrollToTop } from './components/ScrollToTop';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <WishlistProvider>
      <CartProvider>
        <div className="min-h-screen">
          <Header />
          <main>
            <Hero />
            <Products />
            <About />
            <Contact />
          </main>
          <Footer />
          <CartSidebar />
          <WishlistSidebar />
          <FloatingIFood />
          <ScrollToTop />
          <Toaster
            position="top-right"
            closeButton
            toastOptions={{
              style: {
                background: 'linear-gradient(to right, #ec4899, #fb923c)',
                color: 'white',
                border: 'none'
              }
            }}
          />
        </div>
      </CartProvider>
    </WishlistProvider>
  );
}
