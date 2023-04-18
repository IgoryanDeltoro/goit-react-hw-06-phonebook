import { contactsReducer } from './contactsSplice';

import storage from 'redux-persist/lib/storage';
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
import { filtersReducer } from './filtersSplice';

const { configureStore, combineReducers } = require('@reduxjs/toolkit');

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({ contacts: contactsReducer });

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    filter: filtersReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
