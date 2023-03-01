import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
        changed: false
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItem(state, action) {

            state.totalQuantity += 1;

            const existingItem = state.items.find(item => item.id === action.payload.id);

            state.changed = true;

            if(!existingItem) {
                state.items.push({
                    id: action.payload.id,
                    price: action.payload.price,
                    name: action.payload.title,
                    quantity: 1,
                    totalPrice: action.payload.price
                });
            } else {
                existingItem.quantity += 1
                existingItem.totalPrice = existingItem.totalPrice + existingItem.price
            }

        },
        removeItem(state, action) {

            state.totalQuantity -= 1;
            state.changed = true;

            const id = action.payload;
            const existingItem = state.items.find((item) => item.id === id);

            if(existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.id !== id);
            } else {
                existingItem.quantity -= 1;
                existingItem.totalPrice -= existingItem.price;
            }
        }
    }
})

export default CartSlice.reducer;
export const cartActions = CartSlice.actions;