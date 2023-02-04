import axios from 'axios'

import { setNewsByCountryAndCategory } from '../../store/slices/newsByCountry'

import { baseUrl } from '../../constants/backendUrl'
import { allByCountryAndCategory } from '../../constants/byCountryUrls'

export const fetchAllByCountryAndCategory = (country, category) => (dispatch) => {
    axios
        .get(`${baseUrl}${allByCountryAndCategory(country, category)}`)
        .then((response) => dispatch(setNewsByCountryAndCategory(response.data.articles)))
        .catch((err) => console.log(err))
}