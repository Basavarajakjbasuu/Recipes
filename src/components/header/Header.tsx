import { FC, ReactElement, useContext } from 'react';

import './header.css';

import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';
import BookOutlinedIcon from '@mui/icons-material/BookOutlined';

import { ThemeContext } from '../../context/themeProvider';

import { Link } from 'react-router-dom';

const Header: FC = (): ReactElement => {

  const { toggleTheme } = useContext(ThemeContext)
  return (
    <header className='header'>

      <Link to="/">
        <img
          src="/src/assets/logo-light.svg"
          alt="logo-light"
          width="200"
          height="32"
          className='logo-light'
        />

        <img 
          src="/src/assets/logo-dark.svg" 
          alt="logo-dark" 
          width="200" 
          height="32" 
          className="logo-dark"
        />
      </Link>
      
      {/* navbar */}

      <nav className="navbar">
        
        <ul className="navbar-list">

          <li>
            <a href="" className='nav-bar-link title-small has-state'>Home</a>
          </li>

          <li>
            <a href="" className='nav-bar-link title-small has-state'>Recipes</a>
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
        <span className="light-icon">
          <LightModeOutlinedIcon fontSize='large'/>
        </span>
        <span className="dark-icon">
          <DarkModeOutlinedIcon fontSize='large'/>
        </span>

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