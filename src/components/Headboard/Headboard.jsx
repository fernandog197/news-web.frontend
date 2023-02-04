import React from 'react'
import { Link } from 'react-router-dom'

import LogoSunshine from '../../assets/logo-sunshine.png'

import './styles.css'

const Headboard = () => {

    return (
        <div className='headboard-container'>
            <div className="headboard-img-container">
                <Link to='/'>
                    <img className='headboard-img-logo' src={LogoSunshine} alt="logo" />
                </Link>
            </div>
            <h2>One site, all news</h2>
            <div className='headboard-date-container'>
                <hr />
                <h4>{Date()}</h4>
                <hr />
            </div>
            <br />
        </div>
    )
}

export default Headboard