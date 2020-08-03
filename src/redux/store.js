import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from '@reduxjs/toolkit';
// import logger from 'redux-logger';
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
import contactsReducer from './contacts/contacts-reducer';
import storage from 'redux-persist/lib/storage';

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  // logger,
];

const contactsPersistConfig = {
  key: 'contacts',
  storage,
  blacklist: ['filter'],
};

const rootReducer = combineReducers({
  contacts: persistReducer(contactsPersistConfig, contactsReducer),
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

export default { store, persistor };
