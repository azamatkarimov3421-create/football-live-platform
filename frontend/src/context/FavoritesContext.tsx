import React, { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';
import { FavoriteItem } from '../types';

interface FavoritesContextType {
  favorites: FavoriteItem[];
  isFavorite: (type: 'match' | 'team' | 'league', id: string | number) => boolean;
  toggleFavorite: (type: 'match' | 'team' | 'league', id: string | number, name: string, metadata?: any) => Promise<void>;
  loading: boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export const FavoritesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [favorites, setFavorites] = useState<FavoriteItem[]>(() => {
    try {
      const saved = localStorage.getItem('futbollive_favorites_local');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [loading, setLoading] = useState(false);

  // Load favorites from backend
  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await api.getFavorites();
        if (data && data.length > 0) {
          setFavorites(data);
          localStorage.setItem('futbollive_favorites_local', JSON.stringify(data));
        }
      } catch (err) {
        console.warn('Backend favorites sync unavailable, relying on localStorage');
      } finally {
        setLoading(false);
      }
    };
    load();
  }, []);

  const isFavorite = (type: 'match' | 'team' | 'league', id: string | number) => {
    const strId = String(id);
    return favorites.some((f) => f.item_type === type && f.item_id === strId);
  };

  const toggleFavorite = async (
    type: 'match' | 'team' | 'league',
    id: string | number,
    name: string,
    metadata?: any
  ) => {
    const strId = String(id);
    const exists = isFavorite(type, id);

    if (exists) {
      const updated = favorites.filter((f) => !(f.item_type === type && f.item_id === strId));
      setFavorites(updated);
      localStorage.setItem('futbollive_favorites_local', JSON.stringify(updated));
      try {
        await api.removeFavorite(type, strId);
      } catch (e) {
        // silent fallback
      }
    } else {
      const newItem: FavoriteItem = {
        item_type: type,
        item_id: strId,
        item_name: name,
        metadata: metadata || {},
        created_at: new Date().toISOString(),
      };
      const updated = [newItem, ...favorites];
      setFavorites(updated);
      localStorage.setItem('futbollive_favorites_local', JSON.stringify(updated));
      try {
        await api.addFavorite({
          itemType: type,
          itemId: strId,
          itemName: name,
          metadata,
        });
      } catch (e) {
        // silent fallback
      }
    }
  };

  return (
    <FavoritesContext.Provider value={{ favorites, isFavorite, toggleFavorite, loading }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
