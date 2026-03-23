import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Product } from '../types';

interface ProductsState {
  items: Product[];
}

const initialState: ProductsState = {
  items: [
    { id: '1', name: 'Widget Alpha', sales: 420, category: 'Electronics' },
    { id: '2', name: 'Gadget Beta', sales: 310, category: 'Accessories' },
    { id: '3', name: 'Device Gamma', sales: 550, category: 'Electronics' },
    { id: '4', name: 'Tool Delta', sales: 190, category: 'Tools' },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action: PayloadAction<Product>) => {
      state.items.push(action.payload);
    },
  },
});

export const { addProduct } = productsSlice.actions;
export default productsSlice.reducer;
