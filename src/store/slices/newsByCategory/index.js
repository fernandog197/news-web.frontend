import { createSlice } from "@reduxjs/toolkit";

export const newsByCategory = createSlice({
    name: 'newsByCategory',
    initialState: {
        listOfNewsByCategory: []
    },
    reducers: {
        setNewsByCategory: (state, action) => {
            state.listOfNewsByCategory = action.payload
        }
    }
})

export const { setNewsByCategory } = newsByCategory.actions
export default newsByCategory.reducer