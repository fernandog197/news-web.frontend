import axios from 'axios'

import { setAllCountries } from '../../store/slices/countries/index.js'

import { baseUrl } from '../../constants/backendUrl'
import { allCountries } from '../../constants/allCountries.js'

export const fetchAllCountries = () => (dispatch) => {
    axios
        .get(`${baseUrl}${allCountries}`)
        .then((response) => dispatch(setAllCountries(response.data)))
        .catch((err) => console.log(err))
}