import React from 'react'
import { useNavigate, Link } from 'react-router-dom'

import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WebIcon from '@mui/icons-material/Web';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import GitHubIcon from '@mui/icons-material/GitHub';
import CopyrightIcon from '@mui/icons-material/Copyright';

import LogoFresh from '../../assets/logo-fresh.png'

import './styles.css'

const Footer = () => {
    const navigate = useNavigate()

    return (
        <div className='footer-container'>
            <div className="footer-header-container">
                <div className="footer-header-social-logos">
                    <a className='footer-header-social-logos-enlaces' href="https://github.com/fernandog197" target='_blank'>
                        <GitHubIcon className='footer-header-logos-each' fontSize='large' />
                    </a>
                    <a className='footer-header-social-logos-enlaces' href="https://www.linkedin.com/in/miguel-fernando-garcia-1b1670186/" target='_blank'>
                        <LinkedInIcon className='footer-header-logos-each' fontSize='large' />
                    </a>
                    <a className='footer-header-social-logos-enlaces' href="" target='_blank'>
                        <WebIcon className='footer-header-logos-each' fontSize='large' />
                    </a>
                    <a className='footer-header-social-logos-enlaces' href="https://twitter.com/MiguelF33016837" target='_blank'>
                        <TwitterIcon className='footer-header-logos-each' fontSize='large' />
                    </a>
                    <a className='footer-header-social-logos-enlaces' href="https://www.youtube.com/@bluewavebeatz9914" target='_blank'>
                        <YouTubeIcon className='footer-header-logos-each' fontSize='large' />
                    </a>
                </div>
                <h3 onClick={() => {navigate('/aboutMe')}}>Created by Miguel Fernando Garcia - Web Developer</h3>
                <div className='footer-header-logo-container'>
                    <Link to='/'>
                        <img className='footer-header-logo-img' src={LogoFresh} alt="logo" />
                    </Link>
                </div>
            </div>
            <hr />
            <div className="footer-footer-container">
                <div className="footer-footer-meganew">
                    <ol className='footer-footer-orderlist'>
                        <li className='footer-footer-listelement'>MegaNew</li>
                        <li>Argentina</li>
                        <li>USA</li>
                        <li>México</li>
                        <li>España</li>
                        <li>Ucrania</li>
                    </ol>
                </div>
                <div className="footer-footer-contacto">
                    <ol className='footer-footer-orderlist'>
                        <li className='footer-footer-listelement'>Contact me</li>
                        <li onClick={() => {
                            navigate('/form')
                            scroll(0,0)
                        }}>
                            Write me a message!
                    </li>
                        <li>bluewavesalta@gmail.com</li>
                        <li>WhatsApp</li>
                    </ol>
                </div>
                <div className="footer-footer-redes">
                    <ol className='footer-footer-orderlist'>
                        <li className='footer-footer-listelement'>Social</li>
                        <li>
                            <a className='footer-header-social-logos-enlaces' href="https://www.linkedin.com/in/miguel-fernando-garcia-1b1670186/" target='_blank'>
                                LinkedIn
                            </a>
                        </li>
                        <li>
                            <a className='footer-header-social-logos-enlaces' href="" target='_blank'>
                                Web
                            </a>
                        </li>
                        <li>
                            <a className='footer-header-social-logos-enlaces' href="https://twitter.com/MiguelF33016837" target='_blank'>
                                Twitter
                            </a>
                        </li>
                        <li>
                            <a className='footer-header-social-logos-enlaces' href="https://github.com/fernandog197" target='_blank'>
                                GitHub
                            </a>
                        </li>
                        <li>
                            <a className='footer-header-social-logos-enlaces' href="https://www.youtube.com/@bluewavebeatz9914" target='_blank'>
                                YouTube(Music Production :D)
                            </a>
                        </li>
                    </ol>
                </div>
                <div className="footer-footer-about">
                    <ol className='footer-footer-orderlist'>
                        <li className='footer-footer-listelement'>About</li>
                        <li onClick={() => {
                            navigate('/about')
                            scroll(0,0)
                        }}>
                                About this proyect
                        </li>
                    </ol>
                </div>
            </div>
            <div className="footer-copyrigth-container">
                <h4>All Rights Reserved 2022 <CopyrightIcon fontSize='small' /> MegaNews</h4>
            </div>
        </div>
    )
}

export default Footer