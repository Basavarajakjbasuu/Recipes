import { FC } from 'react';

import { Link } from 'react-router-dom';

interface TagsProps {
  tags: string[];
  cuisineType: string[];
  dietLabels: string[];
}

const Tags: FC<TagsProps> = ({ tags, cuisineType, dietLabels }) => {
  const tagsJSX = tags.map((tag, i) => {
    let type = '';

    if (cuisineType.includes(tag)) {
      type = 'cuisineType';
    } else if (dietLabels.includes(tag)) {
      type = 'diet';
    } else {
      type = 'dishType';
    }

    return (
      <Link
        to={`/recipes?${type}=${tag.toLowerCase()}`}
        className='filter-chip label-large has-state'
        key={i}
      >
        {tag}
      </Link>
    );
  });

  return <div className="tag-list">{tagsJSX}</div>;
};

export default Tags;
