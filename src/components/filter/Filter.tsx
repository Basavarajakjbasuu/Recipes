import { CloseOutlined, FilterListOutlined } from '@mui/icons-material';

import './Filter.css';

import { FC, ReactElement, useRef,useEffect, useState } from 'react'
import { Accordions } from '..'

const Filter: FC = (): ReactElement => {
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false);

  const [searchValue, setSearchValue] = useState<string>('');
  const [selectedFilters, setSelectedFilters] = useState<{ value: string, name: string }[]>([]);

  const [queryString, setQueryString] = useState<string>()

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

  // adding search functionality and filters also

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  }

  const handleFilterChange = (selectedFilters: { value: string, name: string }[]) => {
    setSelectedFilters(selectedFilters);
  }

  const handleClearFilters = () => {
    setSelectedFilters([]);
    setIsFilterOpen(false);
  };
  
  const handleApplyFilters = () => {
    // Perform the search operation using searchValue and selectedFilters.
    const queries: [string, string][] = [];

    if (searchValue.length) {
      queries.push(['q', searchValue.toLowerCase()]);
    }

    for (const item of selectedFilters) {
      queries.push([item.name, item.value]);
    }
    
    const queryParam = queries.length ? `?${queries.join("&").replace(/,/g, "=")}` : "";

    setQueryString(queryParam);
    setIsFilterOpen(false);
  };


  // Get number of quires
  const queryStr = queryString?.slice(1);
  const numOfQueries = queryStr && queryStr.split("&").map(i => i.split("=")).length;
 
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
                value={searchValue}
                onChange={handleSearchChange}
              />

            </div>
          </div>
          
          <Accordions
            onChange={handleFilterChange}
            selectedFilters={selectedFilters}
          />

          <div className="filter-actions">

            <button 
              className="btn btn-secondary label-large has-state"
              onClick={handleClearFilters}
            >
              Clear
            </button>

            <button
              className="btn btn-primary label-large"
              onClick={handleApplyFilters}
            >Apply</button>

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

                <div className={`badge label-small ${numOfQueries ? 'active' : ''}`}>
                  {numOfQueries}
                </div>
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