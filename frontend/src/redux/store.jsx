import {configureStore} from "@reduxjs/toolkit"
import userSlice from "./userSlice.jsx"

const store = configureStore({
    reducer:{ 
        //actions to be passed
        user: userSlice
    }
});

export default store;