import { createSlice } from '@reduxjs/toolkit';

// Helper function to save cart items to localStorage
const saveCartToLocalStorage = (items) => {
  localStorage.setItem('cartItems', JSON.stringify(items));
};

// Helper function to load cart items from localStorage
const loadCartFromLocalStorage = () => {
  const savedItems = localStorage.getItem('cartItems');
  return savedItems ? JSON.parse(savedItems) : [];
};

const initialState = {
  items: loadCartFromLocalStorage(), // Initialize cart from localStorage
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const itemExists = state.items.find(item => item.id === action.payload.id);
      if (itemExists) {
        itemExists.quantity += 1; // Increment quantity if item exists
      } else {
        state.items.push({ ...action.payload, quantity: 1 }); // Add new item with quantity 1
      }
      // Save updated cart to localStorage
      saveCartToLocalStorage(state.items);
    },
    
    removeItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1; // Decrement quantity if more than 1
      } else {
        state.items = state.items.filter(item => item.id !== action.payload); // Remove item if quantity is 1
      }
      // Save updated cart to localStorage
      saveCartToLocalStorage(state.items);
    },

    deleteItem: (state, action) => {
      const item = state.items.find(item => item.id === action.payload);
      if (item) {
        // Remove the item entirely from the cart, regardless of quantity
        state.items = state.items.filter(item => item.id !== action.payload);
      }
      // Save updated cart to localStorage
      saveCartToLocalStorage(state.items);
    },
    
    clearCart: (state) => {
      state.items = []; // Clear the cart
      localStorage.removeItem('cartItems'); // Also remove the cart from localStorage
    },
  },
});

export const { addItem, removeItem, deleteItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
