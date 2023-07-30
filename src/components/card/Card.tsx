import { FC, ReactElement, useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import ScheduleIcon from '@mui/icons-material/ScheduleOutlined';

import { BookmarkAdd, BookmarkAddOutlined } from '@mui/icons-material';
import { getTime } from '../utils/utils';

interface ICardProps  {
  recipe: ({
    image: string;
    label: string;
    totalTime: number;
    uri: string;
  });
}


const Card: FC<ICardProps> = ({ recipe }): ReactElement => {
  const [isSaved, setIsSaved] = useState<boolean>(false)

  const { image, label, totalTime:cookingTime, uri } = recipe;

  //extracting recipeID
  const recipeId = uri.slice(uri.lastIndexOf('_') + 1);

  //checking already data is there in local storage or not
  useEffect(() => {
    const isRecipeSaved: string | null = localStorage.getItem(`Recipe${recipeId}`);
    setIsSaved(!!isRecipeSaved);
  }, [recipeId])
  

  //saved recipe to local storage
  const saveRecipe = () => {

    if (!isSaved) {
      window.localStorage.setItem(`Recipe${recipeId}`, JSON.stringify(recipe));
    } else {
      window.localStorage.removeItem(`Recipe${recipeId}`);
    }

    setIsSaved((prevState) => !prevState)
  }
  return (
    <div className="card">
      <figure className="card-media img-holder">
        <img
          src={image}
          alt={label}
          height='200'
          loading='lazy'
          className='img-cover'
        />
      </figure>

      <div className="card-body"> 
        
      <h3 className="title-small">
        <Link to={`/recipe/${recipeId}`}className="card-link">
          {label || 'Un-Title'}
        </Link>
      </h3>
        
      <div className="meta-wrapper">

        <div className="meta-item">
          <span><ScheduleIcon fontSize="large" /></span>

            <span className='label-medium'>{getTime(cookingTime).time || '<10'} { getTime(cookingTime).timeUnit}</span>
        </div>
          
        <button
          className='icon-btn has-state'
          aria-label='Add to saved recipes'
          onClick={saveRecipe}  
        >
          {isSaved ? 
            (<span className="bookmark-add"><BookmarkAdd fontSize='large' /></span>) 
            :
            (<span className="bookmark-add"><BookmarkAddOutlined fontSize='large' /></span>)
          }    
        </button>
          
      </div>


      </div>

    </div>
  )
}

export default Card