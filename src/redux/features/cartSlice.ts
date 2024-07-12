import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { HYDRATE } from 'next-redux-wrapper';

interface CartItem {
  id: string;
  nombre: string;
  image: string;
  talle: string;
  cantidad: number;
  totalPrice: number;
}

interface CartState {
  items: CartItem[];
}

const updateLocalStorage = (cartItems: CartItem[]) => {
  localStorage.setItem('cart', JSON.stringify(cartItems));
};
const initialState: CartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartItems: (state, action: PayloadAction<CartItem[]>) => {
      state.items = action.payload;
      updateLocalStorage(state.items);
    },
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const existingIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (existingIndex >= 0) {
        state.items[existingIndex].cantidad += 1;
        state.items[existingIndex].totalPrice += action.payload.totalPrice / action.payload.cantidad;
      } else {
        state.items.push(action.payload)
      }
      updateLocalStorage(state.items);
    },
    removeFromCart: (state, action: PayloadAction<{ id: string; talle: string }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id || item.talle !== action.payload.talle);
      updateLocalStorage(state.items);
    },
    updateQuantity: (state, action: PayloadAction<{ id: string, cantidad: number }>) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        const unitPrice = item.totalPrice / item.cantidad;
        item.cantidad = action.payload.cantidad;
        item.totalPrice = unitPrice * action.payload.cantidad;
      }
      updateLocalStorage(state.items);
    },
    clearCart: (state) => {
      state.items = [];
      updateLocalStorage(state.items);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(HYDRATE, (state, action: any) => {
      return {
        ...state,
        ...action.payload.cart,
      };
    });
  },
});

export const { setCartItems, addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer;