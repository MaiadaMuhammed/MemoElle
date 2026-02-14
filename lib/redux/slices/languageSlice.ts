import { createSlice } from '@reduxjs/toolkit';

interface LanguageState {
  lang: 'en' | 'ar';
  dir: 'ltr' | 'rtl';
}

const initialState: LanguageState = {
  lang: 'en', // اللغة الافتراضية
  dir: 'ltr',
};

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    toggleLanguage: (state) => {
      if (state.lang === 'en') {
        state.lang = 'ar';
        state.dir = 'rtl';
      } else {
        state.lang = 'en';
        state.dir = 'ltr';
      }
    },
    setLanguage: (state, action) => {
        state.lang = action.payload;
        state.dir = action.payload === 'ar' ? 'rtl' : 'ltr';
    }
  },
});

export const { toggleLanguage, setLanguage } = languageSlice.actions;
export default languageSlice.reducer;