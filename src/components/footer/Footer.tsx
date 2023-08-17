import { FC, ReactElement, useContext} from 'react'

import './footer.css';

import { Link } from 'react-router-dom';

import edamamImg from '../../assets/edamam.svg';
import logoLight from '../../assets/logo-light.svg';
import logoDark from '../../assets/logo-dark.svg';

import { ThemeContext } from '../../context/themeProvider';


const Footer: FC = (): ReactElement => {
  const currentYear = new Date().getFullYear();

  const { isDarkTheme } = useContext(ThemeContext); 

  return (
    <footer className="footer">

      <p className="copyright body-medium">Copyright {currentYear} Bassu </p>

      <Link to="/" className='logo'>
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

      <a href="https://www.edamam.com/" target='_blank' className='edamam'>
        <img src={edamamImg} width={200} height={200} loading='lazy' alt="edamam free recipe api" />
      </a>
    </footer>
  )
}

export default Footer