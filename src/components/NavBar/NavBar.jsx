import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import DehazeIcon from '@mui/icons-material/Dehaze';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';

import DropDownMenu from '../dropdownMenu/DropDownMenu.jsx'

import './styles.css'
import LogoFresh from '../../assets/logo-fresh.png'

const NavBar = ({ setCountry, setTopic }) => {
    const [sideMenu, setSideMenu] = useState(false)

    const registerUser = false

    const { allCountries: countries } = useSelector((state) => state.allCountries)

    const topics = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology']

	const handleChange = (e) => {
		setCountry(e.target.value)
	}

    const handleClick = (e) => {
      e.target.innerHTML === 'All Topics'
        ?	setTopic('')
        :	setTopic(e.target.innerHTML.toLowerCase())
    }

    return (
      <div className='rootNav'>
        <nav className='navbarRoot'>
          <div className="navbarMenu">
            <div className='navbarMenuIcon' onClick={() => setSideMenu(!sideMenu)}>
              <DehazeIcon />
              {
                sideMenu
                ? (
                  <div className='navbar-sidemenu-divcontainer'>
                    <DropDownMenu setTopic={setTopic} setSideMenu={setSideMenu} />
                  </div>
                )
                : (<div></div>)
              }
            </div>
            <div className='navbar-title-logo-container'>
              <Link to='/'>
                <img className='navbar-logo' src={LogoFresh} alt="logo" />
              </Link>
            </div>
          </div>
          <div className="navbarTopics">
            <ol className='navbar-topics-orderlist'>
              	{
					topics?.map(t => (
						<li className='navbarTopic' key={t.toLowerCase()} onClick={handleClick}>{t}</li>
					))
				}
					<li className='navbarTopic navbarTopicAll' onClick={handleClick}>All Topics</li>
            </ol>
          </div>
          <div className="navbarUserLogin">
			<select className='navbar-countrySelector' onChange={handleChange}>
				<option value="" selected='selected'>Select your country...</option>
					{
						countries?.map(c => (
							<option className='navbar-option-country' key={c.code} value={c.code}>
							{`${c.name} ${c.flag}`}
							</option>
						))
					}
			</select>
            {registerUser? <h4 className='navbarLog'>LogOut</h4>: <h4 className='navbarLog'>LogIn</h4>}
            <div className='navbarIcon'>
              {
                registerUser? <LogoutIcon />: <LoginIcon />
              }
            </div>
          </div>
        </nav>
      </div>
    )
}

export default NavBar