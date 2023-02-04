import { configureStore } from '@reduxjs/toolkit'

import newsByCountry from './slices/newsByCountry/index'
import allCountries from './slices/countries/index.js'
import newsByCategory from './slices/newsByCategory/index.js'

export default configureStore({
    reducer: {
        newsByCountry,
        allCountries,
        newsByCategory
    }
})