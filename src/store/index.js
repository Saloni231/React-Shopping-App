import { configureStore } from "@reduxjs/toolkit";
import UISlice from "./UI-Slice";
import CartSlice from "./Cart-Slice";

const store = configureStore({
    reducer: {UI: UISlice, Cart: CartSlice}
});

export default store;