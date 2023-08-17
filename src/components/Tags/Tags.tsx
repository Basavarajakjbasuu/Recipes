import { FC, ReactElement } from 'react';

import './tags.css';

import { dietaryOptions } from '../constants';
import { Link } from 'react-router-dom';

const Tags: FC = (): ReactElement => {
  return (
    <section className='section tag' aria-label='tag-label'>

      <h2 className="section-title display-small" id='tag-label'>
        Choose your health preference.
      </h2>

      <p className="body-medium section-text">
        Choosing your health preference is an important step towards achieving a healthier lifestyle.
      </p>

      <div className="tag-list">
        {dietaryOptions.map((tag) => (
          <Link to={`/recipes?health=${tag.href}`} className="badge-btn body-medium has-state" key={tag.href}> 
            {tag.name}
          </Link>
        ))}
      </div>
    </section>
  )
}

export default Tags