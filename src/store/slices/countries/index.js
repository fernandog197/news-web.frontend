import { createSlice } from '@reduxjs/toolkit'

export const allCountriesSlice = createSlice({
    name: 'countries',
    initialState: {
        allCountries: [],
        selectedCountry: ''
    },
    reducers: {
        setAllCountries: (state, action) => {
            state.allCountries = action.payload
        },
        setSelectedCountry: (state, action) => {
            state.selectedCountry = action.payload
        }
    }
})

export const { setAllCountries, setSelectedCountry } = allCountriesSlice.actions
export default allCountriesSlice.reducer