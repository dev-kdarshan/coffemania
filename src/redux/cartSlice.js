import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  isCartOpen: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existing = state.cartItems.find(item => item.id === action.payload.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    incrementQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
    },
    decrementQty: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload);
      if (item && item.quantity > 1) item.quantity -= 1;
    },
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
    },
    openCartModal: (state) => {
      state.isCartOpen = true;
    },
    closeCartModal: (state) => {
      state.isCartOpen = false;
    },
  },
});

export const {
  addToCart,
  incrementQty,
  decrementQty,
  removeFromCart,
  openCartModal,
  closeCartModal
} = cartSlice.actions;

export default cartSlice.reducer;
