// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Redux imports
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './redux/cartSlice';

// React Query imports
import { QueryClient, QueryClientProvider } from 'react-query'; // or '@tanstack/react-query'

// Create a QueryClient instance
const queryClient = new QueryClient();

// Configure your Redux store
const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

// Render your app with both providers
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
