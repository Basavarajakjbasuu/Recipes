import { FC, ReactElement, useState } from 'react';

import { useNavigate } from "react-router-dom";

import './hero.css';

import SearchIcon from '@mui/icons-material/SearchOutlined';
import  LocalDiningIcon  from '@mui/icons-material/LocalDiningOutlined';

const Hero: FC = (): ReactElement => {
  const [searchValue, setSearchValue] = useState<string>('');
  const [error, setError] = useState<boolean>();

  const navigate = useNavigate();

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value;
    setSearchValue(newValue);

  }

  const handleSearchBtn = () => {

    if (searchValue.length === 0) {
      setError(true)
      return;
    }

    navigate(`/recipes?q=${searchValue.toLowerCase()}`)

  }

  return (
    <article>

      <section className="hero" aria-label='banner'>

        <div className="banner-card">
        
          <h1 className="display-large">Your desired dish?</h1>

          <div className="search-wrapper">

            <span className=" material-symbols-outlined leading-icon"><LocalDiningIcon fontSize='inherit' /></span>

            <input
              type="search"
              name="search" 
              aria-label='Search recipes'
              placeholder='Search recipes'
              className='search-field body-medium has-value'
              value={searchValue}
              autoComplete="off"
              onChange={handleSearchChange}
            />

            <button
              className="search-submit"
              aria-label='Submit'
              onClick={handleSearchBtn}
            >

              <span className='material-symbols-outlined'><SearchIcon fontSize='inherit' /></span>

            </button>

          </div>

          {error && (
            <p className="label-medium error">
              Please search your favorite recipe. 
            </p>
          )}

          <p className="label-medium">
            Search any recipe e.g: burger, pizza, sandwich, toast.
          </p>

        </div>
      </section>

    </article>
  )
}

export default Hero