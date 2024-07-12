import marcasReducer from "./features/marcasSlice";
import tallesReducer from "./features/tallesSlice"
import botinesReducer from "./features/botinesSlice"
import cartReducer from "./features/cartSlice"
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
    reducer: {
        marcasReducer,
        tallesReducer,
        botinesReducer,
        cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch