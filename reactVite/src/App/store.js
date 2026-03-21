import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../Features/todo/todSlice'


// export const store = configureStore({}) 
export const store = configureStore({
    reducer: todoReducer
}) 