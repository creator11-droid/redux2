import { configureStore } from "@reduxjs/toolkit";
import addToDoReducer from './reducer'

const store = configureStore({
    reducer:{ 
        todos:addToDoReducer,
    
    
    }

})

export default store