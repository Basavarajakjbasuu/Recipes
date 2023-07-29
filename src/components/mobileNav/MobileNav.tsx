import {FC, ReactElement, useState, useEffect } from 'react'

import './mobileNav.css';

import {
  BookIcon,
  BookOutlinedIcon,
  HomeIcon,
  HomeOutlinedIcon,
  LunchDiningIcon,
  LunchDiningOutlinedIcon
} from '..';

import { Link } from 'react-router-dom';

const MobileNav: FC = (): ReactElement => {
  const [activeLink, setActiveLink] = useState<string>('home');

  //setting active link
  const handleNavClick = (link: string)  => {
    setActiveLink(link);
  }

  // Set active link immediately after component mounts
  useEffect(() => {
    const currentPath = window.location.pathname.replace('/', '');
    setActiveLink(currentPath || 'home');
  }, []);

  return (
    <nav className='mobile-nav' aria-label='primary'>
      <ul className="nav-list">

        <li className="nav-item">

          <Link
            to='/recipes'
            className={`nav-link ${activeLink === 'recipes' ? 'active' : ''}`}
            onClick={() => handleNavClick("recipes")}
          >
            { 
              activeLink === 'recipes'? (
                <span className="item-icon">
                <LunchDiningIcon fontSize='large' />
                </span>
              ) : (
                <span className="item-icon">
                <LunchDiningOutlinedIcon fontSize='large' />
                </span>
              )
            }
            <span className="label-medium">
              Recipes
            </span>
          </Link>

        </li>

        <li className="nav-item">

        <Link
          to="/"
          className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
          onClick={() => handleNavClick("home")}
        >
         
          {
            activeLink === 'home' ? (
            <span className="item-icon">
              <HomeIcon fontSize='large' />
            </span>
            ) : (
              <span className="item-icon">
              <HomeOutlinedIcon fontSize='large' />
            </span>
            )   
          }

          <span className="label-medium">
            Home
          </span>
        </Link>

        </li>

        <li className="nav-item">

        <Link
          to="/saved"
          className={`nav-link ${activeLink === 'saved' ? 'active' : ''}`}
          onClick={() => handleNavClick("saved")}
        >
          {
            activeLink === 'saved' ? (
              <span className="item-icon">
                <BookIcon fontSize='large' />
              </span>
            ) : (
              <span className="item-icon">
                <BookOutlinedIcon fontSize='large' />
              </span>
            )   
          }   
          
          <span className="label-medium">
            Saved
          </span>
        </Link>

        </li>

      </ul>
    </nav>
  )
}

export default MobileNav