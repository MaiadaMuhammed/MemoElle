import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// تعريف شكل المنتج جوه السلة
interface CartItem {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

// تعريف شكل السلة ككل
interface CartState {
  items: CartItem[];
  totalQuantity: number;
  totalPrice: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // 1. إضافة للسلة
    addToCart: (state, action: PayloadAction<Omit<CartItem, 'quantity'>>) => {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      
      if (!existingItem) {
        state.items.push({ ...newItem, quantity: 1 });
      } else {
        existingItem.quantity++;
      }
      
      // تحديث الإجماليات
      state.totalQuantity++;
      state.totalPrice += newItem.price;
    },

    // 2. حذف من السلة
    removeFromCart: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const existingItem = state.items.find((item) => item.id === id);
      
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== id);
        state.totalQuantity -= existingItem.quantity;
        state.totalPrice -= existingItem.price * existingItem.quantity;
      }
    },

    // 3. تحديث الكمية (دي اللي كانت ناقصة وعملت المشكلة)
    updateQuantity: (state, action: PayloadAction<{ id: number; quantity: number }>) => {
      const { id, quantity } = action.payload;
      const item = state.items.find((i) => i.id === id);
      
      if (item && quantity > 0) {
        item.quantity = quantity;

        // إعادة حساب الإجماليات من الأول للأمان
        state.totalQuantity = state.items.reduce((total, item) => total + item.quantity, 0);
        state.totalPrice = state.items.reduce((total, item) => total + (item.price * item.quantity), 0);
      }
    },
  },
});

// تصدير الدوال عشان نستخدمها بره
export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;