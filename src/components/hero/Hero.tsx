import { FC, ReactElement } from 'react'

import './hero.css';

import SearchIcon from '@mui/icons-material/SearchOutlined';
import  LocalDiningIcon  from '@mui/icons-material/LocalDiningOutlined';

const Hero: FC = (): ReactElement => {
  return (
    <article>

      <section className="hero" aria-label='banner'>

        <div className="banner-card">
        
          <h1 className="display-large">Your desired dish?</h1>

          <div className="search-wrapper">

            <span className=" material-symbols-outlined leading-icon"><LocalDiningIcon fontSize='large' /></span>

            <input
              type="search"
              name="search" 
              aria-label='Search recipes'
              placeholder='Search recipes'
              className='search-field body-medium has-value'
              autoComplete="off"
            />

            <button className="search-submit" aria-label='Submit'>

              <span className='material-symbols-outlined'><SearchIcon fontSize='inherit' /></span>

            </button>

          </div>

          <p className="label-medium">
            Search any recipe e.g: burger, pizza, sandwich, toast.
          </p>

        </div>
      </section>

    </article>
  )
}

export default Hero