import { FC, ReactElement } from 'react';
import { Card, MobileNav } from '../components';

import './Saved.css';

const Saved: FC = (): ReactElement => {

  const savedRecipesKeys = Object.keys(window.localStorage).filter(item => {
    return item.startsWith("Recipe");
  })

  // Parse the JSON strings and create an array of recipe objects
  const savedRecipes = savedRecipesKeys.map(key => {
    const recipeString = localStorage.getItem(key);
    return JSON.parse(recipeString || "");
  });
  

  return (
    <main>
      <article className="article container saved-recipe-page">

        <h2 className="headline-small section-title">All Saved Recipes</h2>

        {savedRecipes.length === 0 ? (
          <p className="body-large">You don't saved any recipes yet!</p>
        ) : (
          <div className="grid-list">
            {savedRecipes.map((item, i) => (
              <Card
                recipe={item}
                key={i}
              />
            ))}
          </div>
        )
        }      
        <MobileNav />
      </article>
      
    </main>
  )
}

export default Saved