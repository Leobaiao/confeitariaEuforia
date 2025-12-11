import React, { createContext, useContext, useState, ReactNode, useCallback, useMemo, useEffect } from 'react';

export interface CartItem {
  id: number;
  name: string;
  price: number; // Preço em centavos
  image: string;
  quantity: number;
}

interface CartContextType {
  items: CartItem[];
  isOpen: boolean;
  addToCart: (item: Omit<CartItem, 'quantity'>) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
  toggleCart: () => void;
  closeCart: () => void;
  openCart: () => void;
}

const CART_STORAGE_KEY = 'euforia_cart';

const CartContext = createContext<CartContextType | undefined>(undefined);

// Função para carregar carrinho do localStorage
function loadCartFromStorage(): CartItem[] {
  try {
    const saved = localStorage.getItem(CART_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Validar estrutura dos dados
      if (Array.isArray(parsed)) {
        return parsed.filter(item =>
          typeof item.id === 'number' &&
          typeof item.name === 'string' &&
          typeof item.price === 'number' &&
          typeof item.image === 'string' &&
          typeof item.quantity === 'number'
        );
      }
    }
  } catch (error) {
    console.warn('Erro ao carregar carrinho do localStorage:', error);
  }
  return [];
}

// Função para salvar carrinho no localStorage
function saveCartToStorage(items: CartItem[]): void {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.warn('Erro ao salvar carrinho no localStorage:', error);
  }
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadCartFromStorage());
  const [isOpen, setIsOpen] = useState(false);

  // Persistir no localStorage sempre que os items mudarem
  useEffect(() => {
    saveCartToStorage(items);
  }, [items]);

  const addToCart = useCallback((newItem: Omit<CartItem, 'quantity'>) => {
    setItems(currentItems => {
      const existingItem = currentItems.find(item => item.id === newItem.id);

      if (existingItem) {
        return currentItems.map(item =>
          item.id === newItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...currentItems, { ...newItem, quantity: 1 }];
    });
  }, []);

  const removeFromCart = useCallback((id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  }, []);

  const updateQuantity = useCallback((id: number, quantity: number) => {
    if (quantity <= 0) {
      setItems(currentItems => currentItems.filter(item => item.id !== id));
      return;
    }

    setItems(currentItems =>
      currentItems.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getTotalItems = useCallback(() => {
    return items.reduce((total, item) => total + item.quantity, 0);
  }, [items]);

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => {
      return total + (item.price * item.quantity);
    }, 0);
  }, [items]);

  const toggleCart = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const closeCart = useCallback(() => {
    setIsOpen(false);
  }, []);

  const openCart = useCallback(() => {
    setIsOpen(true);
  }, []);

  const contextValue = useMemo(() => ({
    items,
    isOpen,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalItems,
    getTotalPrice,
    toggleCart,
    closeCart,
    openCart
  }), [items, isOpen, addToCart, removeFromCart, updateQuantity, clearCart, getTotalItems, getTotalPrice, toggleCart, closeCart, openCart]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
