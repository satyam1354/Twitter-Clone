import { combineReducers, configureStore } from "@reduxjs/toolkit"
import userSlice from "./userSlice.jsx"
import tweetSlice from "./tweetSlice.jsx"

import {persistStore,persistReducer,FLUSH,REHYDRATE,PAUSE, PERSIST, PURGE,REGISTER,} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
}

const rootReducer = combineReducers({
    user: userSlice,
    tweet: tweetSlice
})
const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

// const store = configureStore({
//     reducer: {
//         //actions to be passed ya slice
//         user: userSlice,
//         tweet: tweetSlice
//     }
// });
export default store;