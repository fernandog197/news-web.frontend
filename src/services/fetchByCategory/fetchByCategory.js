import axios from 'axios'

import { setNewsByCategory } from '../../store/slices/newsByCategory/index.js'

import { baseUrl } from '../../constants/backendUrl.js'
import { allByCategory } from '../../constants/byCategoryUrl.js'

export const fetchAllByCategory = (category) => (dispatch) => {
    axios
        .get(`${baseUrl}${allByCategory(category)}`)
        .then((response) => dispatch(setNewsByCategory(response.data.articles)))
        .catch((err) => console.log(err))
}