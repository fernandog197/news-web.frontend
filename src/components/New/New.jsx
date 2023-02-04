import * as React from 'react';
import { useNavigate } from 'react-router-dom'

import DensitySmallIcon from '@mui/icons-material/DensitySmall';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';

import './styles.css'

const New = ({ info, setFullNew }) => {
	const navigate = useNavigate()

	const handleLongTitle = (longTitle) => {
		let shortTitle = longTitle.slice(0, 74)
		return `${shortTitle}...`
	}

	const handleLongDescription = (longDescription) => {
		let shortDescription = longDescription.slice(0, 110)
		return `${shortDescription}...`
	}

	const handleClick = () => {
		setFullNew(info)
		navigate(`/${info.title}`)
		scroll(0,0)
	}
		
	return (
		<div className='new-container'>
			<div className="new-container-img-container">
				<DensitySmallIcon className='new-container-img-container-icon' fontSize='large' />
				<img className='new-container-img' src={info.urlToImage} alt="new-img" onClick={handleClick} />
			</div>
			<div className="new-container-gradient"></div>
			<div className="new-container-details">
				<div className='new-container-details-container-title'>
					<h3 className='new-container-details-title' onClick={handleClick}>
						{
							info.title.length>74
							? handleLongTitle(info.title)
							: info.title
						}
					</h3>
					<div className="new-container-description-container">
						<p className="new-container-description-container-text">
							{
								info.description && info.description.length>100
								? handleLongDescription(info.description)
								: info.description
							}
						</p>
					</div>
					<br />
					<div className="new-container-links-container">
							<a href={info.url} target='_blank' style={{ textDecoration: 'none', color:'#333A56', borderColor:'#333A56' }}>
								<div className="new-container-links-newlink">
									<NewspaperIcon fontSize='medium' />
									<h4>READ ON NEW SOURCE</h4>
								</div>
							</a>
							<div className="new-container-links-icons">
								<BookmarkIcon className='new-container-links-icons-each' fontSize='medium' />
								<ShareIcon className='new-container-links-icons-each' fontSize='medium' />
							</div>
					</div>
					<p className='new-container-details-fuente'>{`SOURCE: ${info.source.name}`}</p>
				</div>
			</div>
		</div>
	)
}

export default New