import React, { createContext, useContext, useState, ReactNode, useCallback, useEffect, useMemo } from 'react';

export interface WishlistItem {
  id: number;
  name: string;
  price: number; // Preço em centavos
  image: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  isOpen: boolean;
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  clearWishlist: () => void;
  isInWishlist: (id: number) => boolean;
  getTotalItems: () => number;
  toggleWishlist: () => void;
  openWishlist: () => void;
  closeWishlist: () => void;
}

const WISHLIST_STORAGE_KEY = 'euforia_wishlist';

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

// Função para carregar wishlist do localStorage
function loadWishlistFromStorage(): WishlistItem[] {
  try {
    const saved = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      // Validar estrutura dos dados
      if (Array.isArray(parsed)) {
        return parsed.filter(item =>
          typeof item.id === 'number' &&
          typeof item.name === 'string' &&
          typeof item.price === 'number' &&
          typeof item.image === 'string'
        );
      }
    }
  } catch (error) {
    console.warn('Erro ao carregar wishlist do localStorage:', error);
  }
  return [];
}

// Função para salvar wishlist no localStorage
function saveWishlistToStorage(items: WishlistItem[]): void {
  try {
    localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify(items));
  } catch (error) {
    console.warn('Erro ao salvar wishlist no localStorage:', error);
  }
}

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>(() => loadWishlistFromStorage());
  const [isOpen, setIsOpen] = useState(false);

  // Persistir no localStorage sempre que os items mudarem
  useEffect(() => {
    saveWishlistToStorage(items);
  }, [items]);

  const addToWishlist = useCallback((newItem: WishlistItem) => {
    setItems(currentItems => {
      const exists = currentItems.find(item => item.id === newItem.id);
      if (exists) {
        return currentItems; // Item já existe, não adiciona novamente
      }
      return [...currentItems, newItem];
    });
  }, []);

  const removeFromWishlist = useCallback((id: number) => {
    setItems(currentItems => currentItems.filter(item => item.id !== id));
  }, []);

  const clearWishlist = useCallback(() => {
    setItems([]);
  }, []);

  const isInWishlist = useCallback((id: number) => {
    return items.some(item => item.id === id);
  }, [items]);

  const getTotalItems = useCallback(() => {
    return items.length;
  }, [items]);

  const toggleWishlist = useCallback(() => {
    setIsOpen(prev => !prev);
  }, []);

  const openWishlist = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeWishlist = useCallback(() => {
    setIsOpen(false);
  }, []);

  const contextValue = useMemo(() => ({
    items,
    isOpen,
    addToWishlist,
    removeFromWishlist,
    clearWishlist,
    isInWishlist,
    getTotalItems,
    toggleWishlist,
    openWishlist,
    closeWishlist
  }), [items, isOpen, addToWishlist, removeFromWishlist, clearWishlist, isInWishlist, getTotalItems, toggleWishlist, openWishlist, closeWishlist]);

  return (
    <WishlistContext.Provider value={contextValue}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const context = useContext(WishlistContext);
  if (context === undefined) {
    throw new Error('useWishlist must be used within a WishlistProvider');
  }
  return context;
}
