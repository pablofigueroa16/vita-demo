"use client";

import React, { createContext, useContext, useEffect, useMemo, useReducer } from "react";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image?: string;
  quantity: number;
};

type CartState = {
  items: Record<string, CartItem>;
};

type Action =
  | { type: "ADD"; payload: { id: string; name: string; price: number; image?: string; quantity?: number } }
  | { type: "REMOVE"; payload: { id: string } }
  | { type: "SET_QTY"; payload: { id: string; quantity: number } }
  | { type: "CLEAR" }
  | { type: "HYDRATE"; payload: CartState };

const initialState: CartState = { items: {} };

function reducer(state: CartState, action: Action): CartState {
  switch (action.type) {
    case "ADD": {
      const { id, name, price, image, quantity = 1 } = action.payload;
      const existing = state.items[id];
      const nextQty = (existing?.quantity || 0) + quantity;
      return {
        items: {
          ...state.items,
          [id]: { id, name, price, image, quantity: nextQty },
        },
      };
    }
    case "REMOVE": {
      const next = { ...state.items };
      delete next[action.payload.id];
      return { items: next };
    }
    case "SET_QTY": {
      const { id, quantity } = action.payload;
      if (quantity <= 0) {
        const next = { ...state.items };
        delete next[id];
        return { items: next };
      }
      const item = state.items[id];
      if (!item) return state;
      return { items: { ...state.items, [id]: { ...item, quantity } } };
    }
    case "CLEAR":
      return initialState;
    case "HYDRATE":
      return action.payload;
    default:
      return state;
  }
}

const CartContext = createContext<{
  state: CartState;
  addItem: (p: { id: string; name: string; price: number; image?: string }, quantity?: number) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clear: () => void;
  count: number; // suma de cantidades
  total: number; // suma total
} | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(reducer, initialState, (init) => {
    if (typeof window === "undefined") return init;
    try {
      const raw = sessionStorage.getItem("vita-cart");
      if (raw) return JSON.parse(raw) as CartState;
    } catch {}
    return init;
  });

  useEffect(() => {
    try {
      sessionStorage.setItem("vita-cart", JSON.stringify(state));
    } catch {}
  }, [state]);

  const count = useMemo(() => Object.values(state.items).reduce((acc, it) => acc + it.quantity, 0), [state]);
  const total = useMemo(() => Object.values(state.items).reduce((acc, it) => acc + it.price * it.quantity, 0), [state]);

  const api = useMemo(
    () => ({
      state,
      addItem: (p: { id: string; name: string; price: number; image?: string }, quantity = 1) =>
        dispatch({ type: "ADD", payload: { ...p, quantity } }),
      removeItem: (id: string) => dispatch({ type: "REMOVE", payload: { id } }),
      setQuantity: (id: string, quantity: number) => dispatch({ type: "SET_QTY", payload: { id, quantity } }),
      clear: () => dispatch({ type: "CLEAR" }),
      count,
      total,
    }),
    [state, count, total]
  );

  return <CartContext.Provider value={api}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}