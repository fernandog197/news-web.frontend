import axios from 'axios'

import { setNewsByCountry } from '../../store/slices/newsByCountry/index'

import { baseUrl } from '../../constants/backendUrl'
import { allByCountry } from '../../constants/byCountryUrls'

export const fetchAllByCountry = (country) => (dispatch) => {
    axios
        .get(`${baseUrl}${allByCountry(country)}`)
        .then((response) => dispatch(setNewsByCountry(response.data.articles)))
        .catch((err) => console.log(err))
}