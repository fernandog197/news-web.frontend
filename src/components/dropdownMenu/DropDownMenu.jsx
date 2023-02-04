import React from 'react'

import './styles.css'

const DropDownMenu = ({ setTopic, setSideMenu }) => {
    const handleClick = (e) => {
		e.target.innerHTML === 'All Topics'
			?	setTopic('')
			:	setTopic(e.target.innerHTML.toLowerCase())
        
        setSideMenu(false)
	}

    return (
        <>
            <ol className='dropdownmenu-optionlist'>
                <li className='dropdownmenu-option' onClick={handleClick}>All Topics</li>
                <li className='dropdownmenu-option' onClick={handleClick}>Bussines</li>
                <li className='dropdownmenu-option' onClick={handleClick}>Entertaiment</li>
                <li className='dropdownmenu-option' onClick={handleClick}>General</li>
                <li className='dropdownmenu-option' onClick={handleClick}>Health</li>
                <li className='dropdownmenu-option' onClick={handleClick}>Science</li>
                <li className='dropdownmenu-option' onClick={handleClick}>Sports</li>
                <li className='dropdownmenu-option' onClick={handleClick}>Technology</li>
            </ol>
        </>
    )
}

export default DropDownMenu