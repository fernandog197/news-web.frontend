import { createSlice } from '@reduxjs/toolkit'

export const newsByCountrySlice = createSlice({
    name: 'newsByCountry',
    initialState: {
        listOfNewsByCountry: [],
        listOfNewsByCountryAndCategory: []
    },
    reducers: {
        setNewsByCountry: (state, action) => {
            state.listOfNewsByCountry = action.payload
        },
        setNewsByCountryAndCategory: (state, action) => {
            state.listOfNewsByCountryAndCategory = action.payload
        }
    }
})

export const { setNewsByCountry, setNewsByCountryAndCategory } = newsByCountrySlice.actions
export default newsByCountrySlice.reducer