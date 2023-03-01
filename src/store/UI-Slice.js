import { createSlice } from "@reduxjs/toolkit";

const UISlice = createSlice({
    name: 'UI',
    initialState: { isVisible: false, notification: null },
    reducers: {
        toggle(state) {
            state.isVisible = !state.isVisible
        },
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.message,
            }
        }
    }
})

export default UISlice.reducer;

export const UIActions = UISlice.actions;