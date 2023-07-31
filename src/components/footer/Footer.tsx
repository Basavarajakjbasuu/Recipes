import { FC, ReactElement} from 'react'

import './footer.css';

import { Link } from 'react-router-dom';

import edamamImg from '../../assets/edamam.svg';

const Footer: FC = (): ReactElement => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">

      <p className="copyright body-medium">Copyright {currentYear} Bassu </p>

      <Link to="/" className='logo'>
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

      <a href="https://www.edamam.com/" target='_blank' className='edamam'>
        <img src={edamamImg} width={200} height={200} loading='lazy' alt="edamam free recipe api" />
      </a>
    </footer>
  )
}

export default Footer