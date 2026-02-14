'use client';

import { Provider } from 'react-redux';
import { store, persistor } from './store'; // استيراد persistor
import { PersistGate } from 'redux-persist/integration/react'; // استيراد البوابة

export function ReduxProvider({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {/* البوابة دي بتأخر عرض الموقع لحد ما الداتا القديمة تتحمل */}
      <PersistGate loading={null} persistor={persistor}>
        {children}
      </PersistGate>
    </Provider>
  );
}