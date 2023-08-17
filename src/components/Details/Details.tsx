import { useState } from 'react';

import { useParams } from 'react-router-dom';

import { BookmarkAdd, BookmarkAddOutlined } from '@mui/icons-material';

import './RecipeDetail.css';


import { useQuery } from '@tanstack/react-query';
import { fetchRecipeDetail } from '../../api/fetchData';
import { getTime } from '../utils/utils';
import Tags from '../ui/Tags';
import Ingredients from '../ui/Ingredients';
import RecipeDetailsSkeleton from '../skeleton/RecipeDetailsSkeleton';


const Details = () => {
  const [isSaved, setIsSaved] = useState<boolean>(false);
  // const [recipeData, setRecipeData] = useState([])

  const { recipeId } = useParams();

  //saved recipe to local storage
  const saveRecipe = () => {

    if (!isSaved) {
      window.localStorage.setItem(`Recipe${recipeId}`, JSON.stringify(data));
    } else {
      window.localStorage.removeItem(`Recipe${recipeId}`);
    }

    setIsSaved((prevState) => !prevState)
  }
  
  const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
  const { data, isLoading, isFetching } = useQuery(
    ['recipeDetails'],
    async () => {
      try {
        await wait(2000);
        if (recipeId) {
          const responseData = await fetchRecipeDetail(recipeId);
          return responseData;
        }
      } catch (error) {
        throw new Error('Error fetching recipes.');
      }
    },
    {
      staleTime: 0,   // Data is considered stale immediately
      cacheTime: 1000, // Cache data for 1 second
    }
  );

  if (isLoading || isFetching) {
    return <RecipeDetailsSkeleton />;
  }

  if (!data) {
    // Handle loading state or error here
    return null;
  }



    const {
      images: { THUMBNAIL, SMALL, REGULAR, LARGE },
      label: title,
      source: author,
      ingredients = [],
      ingredientLines = [],
      totalTime: cookingTime = 0,
      calories = 0,
      cuisineType = [],
      dietLabels = [],
      dishType = [],
      yield: servings = 0,
      // uri
    } = data

  const banner = LARGE ?? REGULAR ?? THUMBNAIL ?? SMALL;
  const { url: bannerUrl, width, height } = banner;

  const tags = [...cuisineType, ...dietLabels, ...dishType];

  return (
    <>
    <figure className="detail-banner img-holder">
        <img
          src={bannerUrl}
          alt={title}
          width={width}
          height={height}
          className='img-cover'
        />
      </figure>

      <div className="detail-content">

        <div className="title-wrapper">
        <h1 className="display-small">{title ?? "UnTitled"}</h1>

          <button
            className="btn btn-secondary has-state has-icon"
            onClick={saveRecipe}
          >
          {isSaved ? 
            (<span className="bookmark-add"><BookmarkAdd fontSize='large' /></span>) 
            :
            (<span className="bookmark-add"><BookmarkAddOutlined fontSize='large' /></span>)
          }    
            
          {isSaved ? 
            (<span className="label-large save-text">Saved</span>)
            :
            (<span className="label-large unsaved-text">UnSaved</span>)  
          } 
          
          </button>
        </div>

        <div className="detail-author label-large">
          <span className="span">By</span> {author}
        </div>

        <div className="detail-stats">

          <div className="stats-item">
            <span className="display-medium">{ingredients.length}</span>

            <span className="label-medium">Ingredients</span>
          </div>

          <div className="stats-item">
            <span className="display-medium">{getTime(cookingTime).time || "<1"}</span>
              
            <span className="label-medium">{getTime(cookingTime).timeUnit}</span>
          </div>

          <div className="stats-item">
            <span className="display-medium">{Math.floor(calories)}</span>
            
            <span className="label-medium">Calories</span>
          </div>
        </div>

        {tags && 
          <Tags
            tags={tags}
            cuisineType={cuisineType}
            dietLabels={dietLabels}
          />
        }

        <h2 className="title-medium ingr-title">
          Ingredients

          <span className="label-medium">for {servings} servings</span>
        </h2>

        {ingredientLines &&
          <Ingredients
            ingredientLines={ingredientLines}
          />
        }
      </div>

    </>

  )
}

export default Details