import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export interface WishlistItem {
  id: number;
  name: string;
  price: string;
  image: string;
}

interface WishlistContextType {
  items: WishlistItem[];
  addToWishlist: (item: WishlistItem) => void;
  removeFromWishlist: (id: number) => void;
  isInWishlist: (id: number) => boolean;
  getTotalItems: () => number;
}

const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);

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

  const isInWishlist = useCallback((id: number) => {
    return items.some(item => item.id === id);
  }, [items]);

  const getTotalItems = useCallback(() => {
    return items.length;
  }, [items]);

  const contextValue = React.useMemo(() => ({
    items,
    addToWishlist,
    removeFromWishlist,
    isInWishlist,
    getTotalItems
  }), [items, addToWishlist, removeFromWishlist, isInWishlist, getTotalItems]);

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