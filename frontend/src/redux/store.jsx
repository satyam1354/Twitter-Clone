import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice.jsx"
import tweetSlice from "./tweetSlice.jsx"

const store = configureStore({
    reducer:{ 
        //actions to be passed ya slice
        user: userSlice,
        tweet: tweetSlice
    }
});

export default store;