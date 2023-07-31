import { CloseOutlined, FilterListOutlined } from '@mui/icons-material';

import './Filter.css';

import { FC, ReactElement, useRef,useEffect, useState } from 'react'
import { Accordions } from '..'

const Filter: FC = (): ReactElement => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedFilters, setSelectedFilters] = useState<any[]>();

  //Toggle filter in mobile and tablet devices
  const filterRef = useRef<HTMLDivElement>(null);

  const toggleFilter = () => {
    setIsFilterOpen((prev) => !prev);
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (filterRef.current && !filterRef.current.contains(event.target as Node)) {
      setIsFilterOpen(false);
    }
  };

  useEffect(() => {
    if (isFilterOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isFilterOpen]);

  // adding search functionality
  return (
    <article className="article recipe-page">

      {/* #FILTER BAR */}

      <div className={`filter-bar ${isFilterOpen ? 'active' : ''}`} ref={filterRef}>

        <div className="title-wrapper">

          <span className="material-symbols-outlined"><FilterListOutlined fontSize='inherit' /></span>  

          <p className="title-medium">Filters</p>

          <button className="icon-btn close-btn has-state" onClick={toggleFilter}>
            <span className="material-symbols-outlined"><CloseOutlined fontSize='inherit' /></span> 
          </button>

        </div>

        {/* filter data */}

        <div className="filter-content">

          <div className="search-wrapper">
            <div className="input-outlined">

              <label className="body-large label">Search</label>

              <input
                type="search"
                name='search'
                id='search'
                className='input-field'
                placeholder='Search  recipes'
              />

            </div>
          </div>
          
          <Accordions />

          <div className="filter-actions">

            <button className="btn btn-secondary label-large has-state" data-filter-clear>Clear</button>

            <button className="btn btn-primary label-large" data-filter-submit>Apply</button>

          </div>
        </div>
      </div>

      <div className="overlay" data-overlay data-filter-toggler></div>


        <div className="recipe-container container">

          <div className="title-wrapper">
            <h2 className="headline-small">All Recipes</h2>

            <button 
              className="btn btn-secondary btn-filter has-state" 
              aria-label="Open filter bar"
              onClick={toggleFilter}
            >
               <span className="material-symbols-outlined"><FilterListOutlined fontSize='inherit' /></span>  

              <div className="wrapper">
                <span className="label-large">Filters</span>

                <div className="badge label-small" data-filter-count>5</div>
              </div>
            </button>
          </div>

          <div className="grid-list" data-grid-list></div>

          <div className="load-more grid-list" data-load-more></div>

        </div>
    </article>
  )
}

export default Filter