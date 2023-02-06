import { configureStore } from '@reduxjs/toolkit';
import contactReduser from './contact/contactSlice';
import filterReduser from './contact/filterSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
const persistConfig = {
  key: 'user',
  storage,
  whitelist: ['users'],
};
const persistedReducer = persistReducer(persistConfig, contactReduser);
export const store = configureStore({
  reducer: { users: persistedReducer, filter: filterReduser },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
export const persistor = persistStore(store);
