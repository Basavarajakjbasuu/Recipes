import { FC, ReactElement} from 'react'
import { Slider } from '..';

import './sliders.css';

const Sliders: FC = (): ReactElement => {
  const cuisineTypes = [
    {
      id: 12,
      title: 'Indian'
    },
    {
      id: 13,
      title: 'American'
    },
  ]; 
  return (
    <>
      {cuisineTypes.map((item) => (
        <section
          key={item.id}
          className='section slider-section'
          aria-labelledby='Slider'
        >
          <Slider title={item.title} />
        </section>
      ))}
    </>
  )
}

export default Sliders