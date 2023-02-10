import React, { useEffect } from 'react'

import Image1 from '../../assets/meganews-background.jpg'

import WorkIcon from '@mui/icons-material/Work'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import TwitterIcon from '@mui/icons-material/Twitter'
import EmailIcon from '@mui/icons-material/Email'

import './styles.css'

const About = () => {
    useEffect(() => {
        scroll(0,0)
    }, [])
    
    return (
        <div className='about__container'>
            <h1 className="about__title">MEGA News</h1>
            <img src={Image1} alt="" className="about__img" />
            <p className="about__paragraph">
                MEGA News es un proyecto enfocado en la diversidad de fuentes, desde 2 puntos de vista: el país y la fuente de la noticia.
            </p>
            <p className="about__paragraph">
                Basado, principalmente, en <a href="https://newsapi.org/" className="about__link" target='_blank'>https://newsapi.org/</a>, se aprovecha la diversidad y flexibilidad de dicha API para lograr este objetivo; haciendo uso de los diversos filtros con el fin de otorgarle al usuario exactamente lo que busca.
            </p>
            <p className="about__paragraph">
                Cabe resaltar que se trabajó con la versión "Developer" de la API, la que, como es lógico, tiene ciertas limitaciones.
            </p>
            <p className="about__paragraph">
             A pesar de esto la aplicación es 100% funcional en las características planteadas inicialmente, ademas de estar abierta a la incorporación de nuevas actualizaciones y funciones.
            </p>
            <p className="about__paragraph">
                Esperando que encuentre constructiva e interesante su visita, agradezco enormenmente su interés en el proyecto.
            </p>

            <h2 className="about__subtitle">Descripción técnica</h2>
            <p className="about__paragraph">
                Concebido como un proyecto FullStack, MEGA News cuenta con un Frontend y un Backend independientes y funcionales en si mismos. 
            </p>
            <p className="about__paragraph">
                Motivo esta decision la idea de plantear una aplicación web que pueda crecer y abarcar nuevas funcionalidades y características, facilitando el desarrollo de las mismas. Pasando a las tecnologías específicas, podemos nombrar las siguientes:
            </p>
            <h3 className="about__subtitle__subtitle">Backend</h3>
            <ul>
                <li>Express JS</li>
                <li>MongoDB Atlas (la base de datos se encuentra conectada y lista pero, actualmente, sin ninguna funcionalidad)</li>
                <li>Node JS</li>
            </ul>

            <h3 className="about__subtitle__subtitle">Frontend</h3>
            <ul>
                <li>React</li>
                <li>Redux toolkit</li>
                <li>Vite</li>
                <li>Material UI(icons sobre todo)</li>
                <li>Vanilla CSS</li>
            </ul>

            <p className="about__paragraph">
                Ademas se utilizaron las siguientes librerias:
            </p>
            <ul>
                <li>axios</li>
                <li>body-parser</li>
                <li>cors</li>
                <li>dotenv</li>
                <li>mongoose</li>
                <li>morgan</li>
                <li>nodemon</li>
            </ul>

            <p className="about__paragraph">
                Si desea mas información puede leer la documentación del proyecto haciendo clic <a href="https://github.com/fernandog197/news-web.frontend" target='_blank'>Aquí</a>
            </p><br /><br />
            <h1 className="about__title">Acerca del desarrollador</h1>
            <p className="about__paragraph">
                Mi nombre es Miguel Fernando Garcia, soy desarrollador web y apasionado el mundo IT. Amo aprender tecnologías nuevas y aplicarlas en mis proyectos. Si quieres saber mas sobre mí, mi trabajo y habilidades; o mis redes sociales, eres bienvenido a visitar mi pagina web o seguirme en mis redes 😊 (solo haz click en el link de tu interés 😊).<br /> <br />
                Muchas gracias por su visita! 😃
            </p>
            <br />
            <br />
            <div className='about__contact'>
                <a href="https://miguelgarcia-portfolio.netlify.app/" target='_blank' className='about__contact-link'>
                    <WorkIcon fontSize='large' />
                </a>
                <a href="https://github.com/fernandog197" target='_blank' className='about__contact-link'>
                    <GitHubIcon fontSize='large' />
                </a>
                <a href="https://www.linkedin.com/in/miguel-fernando-garcia-1b1670186/" target='_blank' className='about__contact-link'>
                    <LinkedInIcon fontSize='large' />
                </a>
                <a href="https://twitter.com/MiguelF33016837" target='_blank' className='about__contact-link'>
                    <TwitterIcon fontSize='large' />
                </a>
                <a href="mailto:bluewavesalta@gmail.com" target='_blank' className='about__contact-link'>
                    <EmailIcon fontSize='large' />
                </a>
            </div>
            <br /><br />
        </div>
    )
}

export default About