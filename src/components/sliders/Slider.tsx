import { FC, ReactElement } from 'react';

import { useQuery } from '@tanstack/react-query';
import { fetchData } from '../../api/fetchData';

import { cardQueries } from '../../api/globals';

import { Card } from '..';

import { Link } from 'react-router-dom';
import { NavigateNext } from '@mui/icons-material';

import SliderSkeleton from '../skeleton/SliderSkeleton';

interface SliderProps {
  title: string;
}
const Slider: FC<SliderProps> = ({ title }): ReactElement => {
  
  //load skeleton for two seconds
  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const { data, isLoading } = useQuery(
    ['cuisine', title],
    async () => {
      try {
        const queryParameters = title ? [['cuisineType', title], ...cardQueries] : cardQueries;
        await wait(2000);
        const responseData = await fetchData(queryParameters);
        return responseData;
      } catch (error) {
        throw new Error('Error fetching recipes.');
      }
    },
    {
      refetchOnWindowFocus: false, // Disable automatic refetch on window focus
    });
  
  

  return (
    <div className="container">

      <h2 className="section-title headline-small">Latest <span className='span'>{ title }</span> Recipes</h2>

      <div className="slider">

        <ul className="slider-wrapper">

          {isLoading ? (
            <>
            {
              Array(12).fill(true).map((_, i) => (
                <li className="slider-item">
                  <SliderSkeleton key={i} />
                </li>  
              ))
            }
            </>
          ) : (
            <>
              {
                Array.isArray(data) ?   
                  data?.map((item) => (
                    <li className='slider-item'  key={item?.recipe?.uri}>
                      <Card
                      recipe={item?.recipe} 
                      />
                    </li>    
                  )) : ''
              }
            </>
          )}

          <li className="slider-item">
            <Link to={`/recipes?cuisineType=${title.toLocaleLowerCase()}`} className='load-more-card has-state'>
              <span className="label-large">Show more</span>

              <span className="material-symbols-outlined">
                <NavigateNext fontSize='inherit' />
              </span>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Slider