import {configureStore, getDefaultMiddleware} from '@reduxjs/toolkit';
import rootReducer from "./rootReducer";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import { AsyncStorage } from 'react-native';

const persistConfig = {
    key: 'root',
    storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
    })
});

const persistedStore = configureStore(store);

export default store;
