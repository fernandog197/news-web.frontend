import React from 'react'

import { Container } from '@mui/material'

import NewsGrid from '../../components/NewsGrid/NewsGrid.jsx'

import './styles.css'

const Home = ({ country, topic, setFullNew }) => {

    return (
        <Container className='home-gridContainer'>
            <NewsGrid country={country} topic={topic} setFullNew={setFullNew} />
        </Container>
    )
}

export default Home