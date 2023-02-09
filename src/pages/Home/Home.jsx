import React, { useEffect } from 'react'

import { Container } from '@mui/material'

import NewsGrid from '../../components/NewsGrid/NewsGrid.jsx'

import './styles.css'

const Home = ({ country, topic, setFullNew }) => {
    useEffect(() => {
        scroll(0, 0)
    }, [])

    return (
        <Container className='home-gridContainer'>
            <NewsGrid country={country} topic={topic} setFullNew={setFullNew} />
        </Container>
    )
}

export default Home