import { FC, ReactElement, useContext } from 'react';

import './header.css';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';


import { ThemeContext } from '../../context/themeProvider';

import { Link } from 'react-router-dom';

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
            <Link to="/" className='navbar-link title-small has-state active'>Home</Link>
          </li>

          <li>
            <Link to="/recipes" className='navbar-link title-small has-state'>Recipes</Link>
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
      <a href="" className='btn btn-primary has-state'>
        <BookOutlinedIcon fontSize='large'/>
        <span className="span">Saved Recipes</span>
      </a>

    </header>
  )
}

export default Header