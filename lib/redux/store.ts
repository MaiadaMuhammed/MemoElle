import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // بيستخدم localStorage
import cartReducer from './slices/cartSlice';
import wishlistReducer from './slices/wishlistSlice';
import languageReducer from './slices/languageSlice'; // استيراد الريديوسر الجديد

// 1. دمج الريديوسرز (Reducers)
const rootReducer = combineReducers({
  cart: cartReducer,
  wishlist: wishlistReducer,
  language: languageReducer, // ضيف الريديوسر الجديد هنا
});

// 2. إعدادات الحفظ
const persistConfig = {
  key: 'root', // مفتاح الحفظ في المتصفح
  storage,
  whitelist: ['cart', 'wishlist', 'language'], // بنحدد إيه اللي يتحفظ (مش عايزين نحفظ كل حاجة)
};

// 3. عمل Reducer "محفوظ"
const persistedReducer = persistReducer(persistConfig, rootReducer);

// 4. إنشاء الـ Store
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// 5. إنشاء الـ Persistor (المسؤول عن الحفظ والاسترجاع)
export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;