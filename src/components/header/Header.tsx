import { FC, ReactElement, useContext } from 'react';

import './header.css';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';


import { ThemeContext } from '../../context/themeProvider';

import { Link, NavLink } from 'react-router-dom';

const Header: FC = (): ReactElement => {

  const { toggleTheme, isDarkTheme } = useContext(ThemeContext); 

  return (
    <header className='header'>

      <Link to="/">
        {isDarkTheme ? (

          <img 
            src={logoDark} 
            alt="logo-dark" 
            width="200" 
            height="32" 
            className="logo-dark"
          />
         
        ) : (
            
          <img
            src={logoLight}
            alt="logo-light"
            width="200"
            height="32"
            className='logo-light'
          />
            
        )}
      </Link>
      
      {/* navbar */}

      <nav className="navbar">
        
        <ul className="navbar-list">

          <li>
            <NavLink
              to="/"
              className='navbar-link title-small has-state'
            >
              Home
              <div className="underline"></div>
            </NavLink>
          </li>

          <li>
            <NavLink to="/recipes" className='navbar-link title-small has-state'>
              Recipes
              <div className="underline"></div>
            </NavLink>
          </li>

        </ul>

      </nav>

      {/* theme button */}

      <button
        className='icon-btn theme-switch has-state'
        aria-pressed="false"
        aria-label='Toggle light and dark theme'
        onClick={toggleTheme}
      >
        {isDarkTheme ? (
          <span className="light-icon">
            <LightModeOutlinedIcon fontSize='large'/>
          </span>
        ) : (
          <span className="dark-icon">
            <DarkModeOutlinedIcon fontSize='large'/>
          </span>
        )}
        
       

      </button>

      {/* bookmark */}
      <Link to={'saved'} className='btn btn-primary has-state'>
        <BookOutlinedIcon fontSize='large'/>
        <span className="span">Saved Recipes</span>
      </Link>

    </header>
  )
}

export default Header