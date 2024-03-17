import { configureStore } from "@reduxjs/toolkit";
import Cartslice from "./Slices/cartSlice";
export const store = configureStore(
    {
        reducer:{
            cart:Cartslice
        }
    }
);