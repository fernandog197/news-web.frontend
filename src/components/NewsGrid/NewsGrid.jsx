import React from 'react'
import { useSelector } from 'react-redux'

import New from '../New/New'

import './styles.css'

// let articles = [
//     {
//         "source": {
//             "id": null,
//             "name": "Ciudad Magazine"
//         },
//         "author": null,
//         "title": "Tini Stoessel y Rodrigo de Paul: el tremendo vaticinio de Pitty, la numeróloga sobre la pareja - Ciudad Magazine",
//         "description": "La gurú de los famosos analizó a la pareja. Luego a la cantante y al futbolista por separado y sorprendió con su tremendo pronóstico.",
//         "url": "https://www.ciudad.com.ar/espectaculos/tini-stoessel-rodrigo-paul-tremendo-vaticinio-pitty-numerologa-pareja_212339",
//         "urlToImage": "https://cdn.ciudad.com.ar/sites/default/files/styles/nota_portada_crop/public/nota_video/2022/12/29/tini-depaul.jpg?itok=Ww3llz6y",
//         "publishedAt": "2022-12-29T11:56:10Z",
//         "content": "A menos de un año de blanquear su romance, Tini Stoessel y Rodrigo de Paul disfrutan de su noviazgo, el cual se vio consolidado en el Mundial Qatar 2022y en los shows que la cantante dio en Argentina… [+1559 chars]"
//     },
//     {
//         "source": {
//             "id": "la-nacion",
//             "name": "La Nacion"
//         },
//         "author": "LA NACION",
//         "title": "A los 60 años, Paula Abdul sembró la polémica en redes con un radical cambio de look - LA NACION",
//         "description": "La integrante del jurado de American Idol subió imágenes de sus festejos navideños, pero la atención de muchos usuarios se enfocó en el supuesto uso de filtros: “Parece adolescente”",
//         "url": "https://www.lanacion.com.ar/espectaculos/a-los-60-anos-paula-abdul-sembro-la-polemica-en-redes-con-un-radical-cambio-de-look-nid28122022/",
//         "urlToImage": "https://resizer.glanacion.com/resizer/qZr60dPuV028_bgqzPWeQL14GOg=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/PUN6SO5VEZH6VMFFCFIWZP7XC4.jpg",
//         "publishedAt": "2022-12-29T11:38:00Z",
//         "content": "Dentro de la industria del entretenimiento, son muchas las celebridades que enfrentaron duras críticas por compartir imágenes y videos con exceso de edición. Esta lista incluye nombres que van desde … [+3030 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "TyC Sports"
//         },
//         "author": "TyC Sports.com",
//         "title": "El gigante de la Premier League que se quedaría con Enzo Fernández, según la prensa inglesa - Rumbo a Tokio",
//         "description": "El mediocampista del Benfica, que tiene una cláusula de 120 millones de euros, cambiaría de club en los primeros días de enero. Expectativa en River, que tiene el 25 por ciento del pase.",
//         "url": "https://www.tycsports.com/premier-league/en-inglaterra-aseguran-que-chelsea-tiene-ventaja-para-quedarse-con-enzo-fernandez-id484538.html",
//         "urlToImage": "https://media.tycsports.com/files/2022/12/27/519839/enzo-fernandez_1440x810_wmk.webp?v=1",
//         "publishedAt": "2022-12-29T11:10:00Z",
//         "content": "El mediocampista del Benfica, que tiene una cláusula de 120 millones de euros, cambiaría de club en los primeros días de enero. Expectativa en River, que tiene el 25 por ciento del pase.\r\nEnzo Fernán… [+2067 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "TN - Todo Noticias"
//         },
//         "author": "TN",
//         "title": "Apareció la foto que confirma el romance entre Zaira Nara y Facundo Pieres - TN - Todo Noticias",
//         "description": "Después de varios meses con el rumor instalado, asistieron a un evento y fueron retratados cuando conversaban con Susana Giménez y Marcelo Tinelli.",
//         "url": "https://tn.com.ar/show/famosos/2022/12/29/zaira-nara-y-facundo-pieres-se-mostraron-juntos-por-primera-vez-en-punta-del-este-la-foto-del-romance/?utm_source=Facebook&fbclid=IwAR3wKKCcfc1mW0-VmfFoiK2WksS83WeqN4EyhhcoIeFrWVP2w97FaHKbtJQ&utm_medium=Social&utm_campaign=tn_todonoticias",
//         "urlToImage": "https://tn.com.ar/resizer/uSHgQ38THYnCboVJyfNV69TENTQ=/1023x0/smart/filters:format(webp)/cloudfront-us-east-1.images.arcpublishing.com/artear/TEUOAMXVTVEC5GWU73XD3OF2TA.jpg",
//         "publishedAt": "2022-12-29T10:29:33Z",
//         "content": "Después de pasar la Navidad en Buenos Aires, Zaira Nara viajó a Punta del Este para recibir el Año Nuevo y descansar. Allí se encontró con Facundo Pieres, el hombre que le hizo volver a creer en el a… [+2566 chars]"
//     },
//     {
//         "source": {
//             "id": "la-nacion",
//             "name": "La Nacion"
//         },
//         "author": null,
//         "title": "Video: las cataratas del Niágara se congelaron parcialmente tras la ola de frío que azota Estados Unidos y Canadá - LA NACION",
//         "description": "El fenómeno ocurrió tan solo seis veces en la historia reciente; turistas desafiaron las bajas temperaturas y obtuvieron asombrosas imágenes de la atracción natural",
//         "url": "https://www.lanacion.com.ar/el-mundo/video-las-cataratas-del-niagara-se-congelaron-parcialmente-tras-la-ola-de-frio-que-azota-estados-nid29122022/",
//         "urlToImage": "https://resizer.glanacion.com/resizer/L-N4Go1aC54zB7HA5xH68uYTkrI=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/M4GUH7K6PNCGJIBQF2EFF5M3OA.jpg",
//         "publishedAt": "2022-12-29T10:29:00Z",
//         "content": "Una parte de las cataratas del Niágara se congeló parcialmente como consecuencia de la tormenta invernal que azota tanto a Estados Unidos desde hade días, reportó la cadena CBS. Subrayó además que el… [+3286 chars]"
//     },
//     {
//         "source": {
//             "id": "la-nacion",
//             "name": "La Nacion"
//         },
//         "author": null,
//         "title": "Guerra Rusia-Ucrania, en vivo: últimas noticias del conflicto y el minuto a minuto - LA NACION",
//         "description": "Seguí la cobertura del conflicto bélico; reacciones en Moscú, imágenes y todo lo que hay que saber",
//         "url": "https://www.lanacion.com.ar/el-mundo/guerra-rusia-ucrania-en-vivo-ultimas-noticias-del-conflicto-y-el-minuto-a-minuto-nid29122022/",
//         "urlToImage": "https://resizer.glanacion.com/resizer/YeZsbb6ckQdNbqxR4_EvoixczMo=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CFQZSBIH7VEBLMCNP36UAKZUE4.jpg",
//         "publishedAt": "2022-12-29T10:26:00Z",
//         "content": "Casi la mitad de la población de la capital ucraniana estaba sin electricidad este jueves a mediodía, tras una nueva tanda de bombardeos rusos contra infraestructuras energéticas en Ucrania, afirmó e… [+10014 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Diario El Dia. www.eldia.com"
//         },
//         "author": "Diario El Dia de La Plata www.eldia.com",
//         "title": "Olga Naum y su trágico final: qué dice la reveladora carta que dejó antes de morir - Diario El Dia",
//         "description": "La diseñadora de indumentaria Olga Naum fue hallada muerta en la habitación de un hotel del barrio porteño de Recoleta, donde dejó una nota en la que se refier...",
//         "url": "https://www.eldia.com/nota/2022-12-29-4-50-46-olga-naum-el-tragico-final-y-una-carta-reveladora-espectaculos",
//         "urlToImage": "https://cdn1.eldia.com/63ad1ac0e812ff001754e5e5/1672300246071.jpg?cw=600&ch=365",
//         "publishedAt": "2022-12-29T07:56:57Z",
//         "content": "La diseñadora de indumentaria Olga Naum fue hallada muerta en la habitación de un hotel del barrio porteño de Recoleta, donde dejó una nota en la que se refiere a desgracias familiares relacionadas a… [+3868 chars]"
//     },
//     {
//         "source": {
//             "id": "infobae",
//             "name": "Infobae"
//         },
//         "author": "anónimo",
//         "title": "Rusia atacó masivamente a Ucrania con misiles de crucero desde aviones y barcos - infobae",
//         "description": "Más temprano las fuerzas de Kiev reportaron una nueva oleada de ataques de las tropas del Kremlin con drones en las regiones del este y el sur del país durante la noche de este miércoles",
//         "url": "https://www.infobae.com/america/mundo/2022/12/29/rusia-ataco-masivamente-a-ucrania-con-misiles-de-crucero-desde-aviones-y-barcos/",
//         "urlToImage": "https://www.infobae.com/new-resizer/3r0XTeE9MlRK-3lBa7RajUCVlpI=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/KNUYXJD2FE7TYTJGDH3ATXJ7UY.jpg",
//         "publishedAt": "2022-12-29T07:53:01Z",
//         "content": "Ucrania fue atacada por tropas rusas desde varias direcciones con misiles de crucero desde aviones y barcos estratégicos, informó este jueves el Mando de la Fuerzas Aéreas ucraniana.\r\nDespués del ata… [+2732 chars]"
//     },
//     {
//         "source": {
//             "id": "la-nacion",
//             "name": "La Nacion"
//         },
//         "author": null,
//         "title": "La actriz de Smallville, Allison Mack, reveló el motivo por el que ingresó a la secta sexual NXVIM - LA NACION",
//         "description": "Mientras cumple su condena por convencer a un grupo de mujeres de formar parte del culto, convertirse en esclavas del líder y marcar sus cuerpos con sus iniciales, salió a la luz una entrevista de 2017 con argumentos muy distintos a los que brindó ante el tri…",
//         "url": "https://www.lanacion.com.ar/espectaculos/personajes/la-actriz-de-smallville-allison-mack-revelo-el-motivo-por-el-que-ingreso-a-la-secta-sexual-nxvim-nid29122022/",
//         "urlToImage": "https://resizer.glanacion.com/resizer/Xs6WhDkJBrtaIoZ1jijbmfUDfVQ=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/AW2KXYPXVNGLLI4KZTMQC632AY.jpg",
//         "publishedAt": "2022-12-29T07:11:00Z",
//         "content": "Allison Mack fue la protagonista de Smallville, la serie que recreaba las vivencias de Clark Kent en su adolescencia, antes de calzarse el traje azul y rojo. Su personaje, la suspicaz Chloe Sullivan,… [+4172 chars]"
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": null,
//         "title": "La dura respuesta de Alberto Fernández a las \"barrabasadas\" de la Corte Suprema - Página/12",
//         "description": null,
//         "url": "https://news.google.com/__i/rss/rd/articles/CBMiX2h0dHBzOi8vd3d3LnBhZ2luYTEyLmNvbS5hci81MTE4MjAtbGEtZHVyYS1yZXNwdWVzdGEtZGUtYWxiZXJ0by1mZXJuYW5kZXotYS1sYXMtYmFycmFiYXNhZGFzLWRl0gFfaHR0cHM6Ly93d3cucGFnaW5hMTIuY29tLmFyLzUxMTgyMC1sYS1kdXJhLXJlc3B1ZXN0YS1kZS1hbGJlcnRvLWZlcm5hbmRlei1hLWxhcy1iYXJyYWJhc2FkYXMtZGU?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2022-12-29T05:57:12Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "la-nacion",
//             "name": "La Nacion"
//         },
//         "author": null,
//         "title": "Kylian Mbappé rompió el silencio tras la final del Mundial de Qatar: “Creo que nunca lo asimilaré”, y qué le generaron los festejos de Dibu Martínez - LA NACION",
//         "description": "El delantero reapareció en PSG con un penal en el descuento para el triunfo por 2-1; luego habló por primera vez tras la derrota ante la Argentina y también se refirió a Messi",
//         "url": "https://www.lanacion.com.ar/deportes/futbol/kylian-mbappe-rompio-el-silencio-tras-la-final-del-mundial-de-qatar-creo-que-nunca-lo-asimilare-y-nid28122022/",
//         "urlToImage": "https://resizer.glanacion.com/resizer/zg_5SgYgDA4ufazaCOeyXUWIK2w=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/T3KH4ITDABCNBFMCTNKKH5F5JU.jpg",
//         "publishedAt": "2022-12-29T05:22:00Z",
//         "content": "El goleador del Mundial le dio a Paris Saint Germain un triunfo agónico y sufrido. En el minuto 50 del segundo tiempo, Kylian Mbappé festejó el 2-1 ante Racing de Strasbourg con un entusiasmo y desah… [+5647 chars]"
//     },
//     {
//         "source": {
//             "id": "la-nacion",
//             "name": "La Nacion"
//         },
//         "author": null,
//         "title": "¿Por qué Nueva York se está “vaciando”? - LA NACION",
//         "description": "En los últimos dos años, la “Gran Manzana” se convirtió en uno de los estados que mayor cantidad de residentes perdió; las razones detrás de este fenómeno crece a pasos agigantados",
//         "url": "https://www.lanacion.com.ar/el-mundo/por-que-nueva-york-se-esta-vaciando-nid29122022/",
//         "urlToImage": "https://resizer.glanacion.com/resizer/ckLL_joGaAopFvzGqBxftq1c2_c=/768x0/filters:format(webp):quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/QVF2I3GATFHWJHPDU6IFGJQWYE.jpg",
//         "publishedAt": "2022-12-29T05:06:00Z",
//         "content": "Una casa con patio trasero y espacio para montar una oficina era el sueño de Giovanna Almeida antes de que el mundo oyera hablar por primera vez del Covid. Giovanna se fue de Belo Horizonte a Nueva Y… [+5627 chars]"
//     },
//     {
//         "source": {
//             "id": "infobae",
//             "name": "Infobae"
//         },
//         "author": "anónimo",
//         "title": "Cómo a partir de una muestra de sangre se podría detectar el Alzheimer de forma precoz - infobae",
//         "description": "Un equipo de científicos de Estados Unidos y Suecia desarrollaron un test que reemplazaría al costoso escáner cerebral o a la punción lumbar. Cuáles son los puntos que buscan analizar los expertos",
//         "url": "https://www.infobae.com/america/ciencia-america/2022/12/29/como-a-partir-de-una-muestra-de-sangre-se-podria-detectar-el-alzheimer-de-forma-precoz/",
//         "urlToImage": "https://www.infobae.com/new-resizer/nnbFp6XBacGDhlwBdXKcbC0R75Y=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/QB7CYPO725CQJOLVR57PQPZXME.jpg",
//         "publishedAt": "2022-12-29T03:53:52Z",
//         "content": "Cuando se diagnostica Alzheimer en una persona, los médicos se basan en signos y síntomas que aparecen cuando la enfermedad ya produjo daño cerebral. Es por eso que se está investigando para contar c… [+7354 chars]"
//     },
//     {
//         "source": {
//             "id": "google-news",
//             "name": "Google News"
//         },
//         "author": null,
//         "title": "Se agravó el estado de salud de Benedicto XVI - Página/12",
//         "description": null,
//         "url": "https://news.google.com/__i/rss/rd/articles/CBMiUGh0dHBzOi8vd3d3LnBhZ2luYTEyLmNvbS5hci81MTE1NjItc2UtYWdyYXZvLWVsLWVzdGFkby1kZS1zYWx1ZC1kZS1iZW5lZGljdG8teHZp0gFQaHR0cHM6Ly93d3cucGFnaW5hMTIuY29tLmFyLzUxMTU2Mi1zZS1hZ3Jhdm8tZWwtZXN0YWRvLWRlLXNhbHVkLWRlLWJlbmVkaWN0by14dmk?oc=5",
//         "urlToImage": null,
//         "publishedAt": "2022-12-29T03:27:50Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": "infobae",
//             "name": "Infobae"
//         },
//         "author": "anónimo",
//         "title": "Rosario: atacaron a tiros un canal de televisión y una cárcel casi en simultáneo - infobae",
//         "description": "La balacera ocurrió mientras se emitía Telenoche Rosario, en Canal 3. Es el segundo atentado contra la señal en menos de un mes",
//         "url": "https://www.infobae.com/sociedad/policiales/2022/12/29/rosario-atacaron-a-tiro-un-canal-de-television-y-una-carcel-casi-en-simultaneo/",
//         "urlToImage": "https://www.infobae.com/new-resizer/snM_Cuoq-NwtE6JLLw_VCrqXHKo=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/KGYQU5SBJNFNLMUYWALQQBH24Q.jpg",
//         "publishedAt": "2022-12-29T01:41:24Z",
//         "content": "Por segunda vez en el mismo mes, atacaron a tiros el frente del predio de Televisión Litoral, donde funciona Canal 3, Radio 2, FM Vida, Frecuencia Plus y el diario digital Rosario3.com. En esta oport… [+3211 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Clarín"
//         },
//         "author": "Ernesto Azarkevich",
//         "title": "Misiones: sicarios mataron de cinco tiros a una maestra y balearon a su marido - Clarín",
//         "description": "Fue en la localidad de Bernardo de Yrigoyen. Los asesinos atacaron a la mujer y su pareja desde una moto a su auto. Luego huyeron hacia Brasil. Sospecha que el hombre podría ser el objetivo.",
//         "url": "https://www.clarin.com/policiales/misiones-sicarios-mataron-tiros-maestra-balearon-marido_0_uKT2bseSGG.html",
//         "urlToImage": "https://www.clarin.com/img/2022/12/28/6h0m65Ljd_1200x630__1.jpg",
//         "publishedAt": "2022-12-29T01:08:48Z",
//         "content": "Una docente fue asesinada a balazos dentro de su automóvil y su pareja resultó herida, aunque ya está fuera de peligro. El hecho ocurrió en la tarde de este miércoles en la localidad de Bernardo de I… [+2596 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Télam"
//         },
//         "author": "Télam - Agencia Nacional de Noticias",
//         "title": "Detienen al gobernador de Santa Cruz y líder opositor por su rol en el golpe a Evo Morales - Télam",
//         "description": "Es investigado por su rol en el golpe de Estado de 2019 contra el entonces presidente Evo Morales y fue denunciado hace semanas por promover el paro de más de 30 días en su departamento en reclamo de un censo nacional para 2023.",
//         "url": "https://www.telam.com.ar/notas/202212/615639-detuvieron-gobernador-santa-cruz-bolivia.html",
//         "urlToImage": "https://www.telam.com.ar/thumbs/bluesteel/advf/imagenes/2019/11/5ddd9cc2b4f10_450.jpg",
//         "publishedAt": "2022-12-28T23:27:47Z",
//         "content": "Camacho será trasladado a La Paz. \r\nEl gobernador del departamento boliviano de Santa Cruz y líder opositor, Luis Fernando Camacho, fue detenido hoy en la causa llamada \"golpe de Estado I\" que invest… [+6066 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "EL PAÍS"
//         },
//         "author": "Mar Centenera",
//         "title": "Abuelas de Plaza de Mayo recupera al nieto 132, secuestrado con nueve meses en dictadura - EL PAÍS Argentina",
//         "description": "Juan fue criado como hijo de los dueños de la finca en la que trabajaba su madre biológica, secuestrada a los 21 años. Los hermanos de crianza del nieto 132 le revelaron la verdad cuando sus apropiadores murieron",
//         "url": "https://elpais.com/argentina/2022-12-28/abuelas-de-plaza-de-mayo-recupera-al-nieto-132-secuestrado-con-nueve-meses-en-dictadura.html",
//         "urlToImage": "https://imagenes.america.elpais.com/resizer/Llna1VFDxDhuMMEj09kIQCSmYV8=/1200x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/5WEQISR2PHEO4SQAVSJNV7YO2Y.jpg",
//         "publishedAt": "2022-12-28T22:26:07Z",
//         "content": null
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "ámbito.com"
//         },
//         "author": "Solange Rial",
//         "title": "La Bolsa está de fiesta: anotó décima suba al hilo y superó los 200.000 puntos - ámbito.com",
//         "description": "Mientras, los ADRs de empresas argentinas en Wall Street cerraron mixtos, y los bonos en dólares terminaron en negativo.",
//         "url": "https://www.ambito.com/finanzas/bolsa/la-esta-fiesta-anoto-decima-suba-al-hilo-y-supero-los-200000-puntos-n5617143",
//         "urlToImage": "https://media.ambito.com/p/9dbac6c700969d76f0b3a5c397062e30/adjuntos/239/imagenes/029/956/0029956151/1200x675/smart/impulsadas-argentina-y-brasil-salidas-bolsa-toman-impulso-america-latina.jpg",
//         "publishedAt": "2022-12-28T21:40:00Z",
//         "content": "En tanto, la dinámica de los ADRs de empresas argentinas que cotizan en Wall Street finalizaron dispares. Las mayores alzas fueron para Corporación América (+4,3%), Banco Macro(+3,4%) yGrupo Financie… [+1467 chars]"
//     },
//     {
//         "source": {
//             "id": null,
//             "name": "Cadena 3"
//         },
//         "author": "Cadena 3 Argentina",
//         "title": "El grupo empresario Lago Escondido denunciará penalmente a Juan Grabois - Cadena 3",
//         "description": "El dirigente social será acusado de violación de domicilio, intrusión, amenazas, daños a la propiedad privada y violencia de género, tras levantar el acampe en la estancia del magnate británico Joe Lewis.",
//         "url": "https://www.cadena3.com/noticia/politica-y-economia/el-grupo-empresario-lago-escondido-denunciara-penalmente-a-juan-grabois_346348",
//         "urlToImage": "https://www.cadena3.com/admin/playerswf/fotos/ARCHI_969108.jpg",
//         "publishedAt": "2022-12-28T21:31:40Z",
//         "content": "El grupo empresario \"Lago Escondido\" anticipó que denunciará penalmente al dirigente social Juan Grabois por \"violación de domicilio, intrusión, amenazas, daños a la propiedad privada y violencia de … [+1370 chars]"
//     }
// ]

const NewsGrid = ({ country, topic, setFullNew }) => {
    let news = []
    
    if(topic === '' && country === '') {
        let { listOfNewsByCountry } = useSelector((state) => state.newsByCountry)
        news = listOfNewsByCountry
    }
    if(topic && country === '') {
        let { listOfNewsByCategory } = useSelector((state) => state.newsByCategory)
        news = listOfNewsByCategory
    }
    if(country && topic === '') {
        let { listOfNewsByCountry } = useSelector((state) => state.newsByCountry)
        news = listOfNewsByCountry
    }
    if(country && topic) {
        let { listOfNewsByCountryAndCategory } = useSelector((state) => state.newsByCountry)
        news = listOfNewsByCountryAndCategory
    }

    return (
        <div className='newsgrid-container'>
            {
                news.map(details => (
                        <New info={details} setFullNew={setFullNew} />
                ))
            }
        </div>
    )
}

export default NewsGrid