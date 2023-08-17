import { FC } from 'react';


interface IngrProps {
  ingredientLines: string[];
}

const Ingredients: FC<IngrProps> = ({ ingredientLines }) => {
  return (
    <ul className="body-large ingr-list">
    {ingredientLines.map((ingredient, i) => (
      <li className="ingr-item" key={i}>
        {ingredient}
      </li>
    ))}
  </ul>
  )
}

export default Ingredients