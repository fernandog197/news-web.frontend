import React from 'react'

import './styles.css'

let fillerText = 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ab asperiores totam enim necessitatibus quasi placeat amet nesciunt a quas optio, expedita eius voluptatum, nostrum doloremque! Beatae vel expedita dolor. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora ab asperiores totam enim necessitatibus quasi placeat amet nesciunt a quas optio, expedita eius voluptatum, nostrum doloremque! Beatae vel expedita dolor. <br />Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet culpa numquam exercitationem at suscipit! Est molestias eligendi suscipit optio nisi iure neque, tempore sint, debitis nemo repellat, aut dolores eveniet.'


const NewDetail = ({ fullNew, topic }) => {
    let { source, author, title, description, url, urlToImage, publishedAt, content } = fullNew

    return (
        <div className='newdetail-container'>
            <div className='newdetail-title-container'>
                <h3 className='newdetail-title-container-topic'>{topic.toUpperCase() || 'ATENCION'}</h3>
                <h1>{title}</h1>
                <h3 className='newdetail-title-container-description'>{description}</h3>
            </div>
            <div>

            </div>
            <div>
                <img className='newdetail-img' src={urlToImage} alt={title} />
            </div>
            <div className="newdetail-container-content-container">
                <p className='newdetail-container-content'>{`${content} ${fillerText}`}</p>
            </div>
        </div>
    )
}

export default NewDetail