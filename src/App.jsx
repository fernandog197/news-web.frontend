import React, { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import Home from './pages/Home/Home.jsx'
import NavBar from './components/NavBar/NavBar.jsx'
import NewDetail from './pages/NewDetail/NewDetail.jsx'
import Headboard from './components/Headboard/Headboard.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './pages/About/About.jsx'
import Form from './pages/Form/Form.jsx'

import { fetchAllCountries } from './services/fetchAllCountries/fetchAllCountries'
import { fetchAllByCategory } from './services/fetchByCategory/fetchByCategory'
import { fetchAllByCountryAndCategory } from './services/fetchByCountry/fetchByCountryAndCategory'
import { fetchAllByCountry } from './services/fetchByCountry/fetchByCountry'

const App = () => {
    const dispatch = useDispatch()
    const [topic, setTopic] = useState('')
    const [country, setCountry] = useState('')
    const [fullNew, setFullNew] = useState({})

    useEffect(() => {
        dispatch(fetchAllCountries())
    }, [dispatch])

    useEffect( () => {
        if(topic === '' && country === '') {
            dispatch(fetchAllByCountry('ar'))
        }
        if(topic && country === '') {
            dispatch(fetchAllByCategory(topic))
        }
        if(country && topic === '') {
            dispatch(fetchAllByCountry(country))
        }
        if(country && topic) {
            dispatch(fetchAllByCountryAndCategory(country, topic))
        }
    }, [dispatch, topic, country])

    return (
        <>
            <NavBar setCountry={setCountry} setTopic={setTopic} />
            <Headboard />
            <Routes>
                <Route path='/' element={<Home country={country} topic={topic} setFullNew={setFullNew} />} />
                <Route path='/:title' element={<NewDetail fullNew={fullNew} topic={topic} />} />
                <Route path='/form' element={<Form />} />
                <Route path='/about' element={<About />} />
            </Routes>
            <Footer setCountry={setCountry} />
        </>
    )
}

export default App