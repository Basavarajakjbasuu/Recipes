import { FC, ReactElement, useState } from 'react';

import { TimerOutlined, SpaOutlined, RestaurantOutlined, FastfoodOutlined, PublicOutlined } from '@mui/icons-material';
import EmojiFoodBeverageOutlinedIcon from '@mui/icons-material/EmojiFoodBeverageOutlined';
import FitnessCenterOutlinedIcon from '@mui/icons-material/FitnessCenterOutlined';
import { CaloriesConstants, CuisineConstants, DietConstants, HealthConstants, IngredientsConstants, MealConstants, TimeConstants } from '../constants';
import { AccordionContainer } from '..';

const Accordions: FC = (): ReactElement => {

  const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);

  const handleAccordionClick = (index: number) => {
    if (expandedAccordion === index) {
      setExpandedAccordion(null); // Clicked on the same accordion, so close it
    } else {
      setExpandedAccordion(index); // Clicked on a different accordion, expand it
    }
  };

  return (
    <>

      <AccordionContainer
        icon={TimerOutlined}
        title='Cooking time'
        filterChips={TimeConstants}
        isExpanded={expandedAccordion === 0}
        onClick={() => handleAccordionClick(0)}
      />     
      
      <AccordionContainer
        icon={EmojiFoodBeverageOutlinedIcon}
        title='Ingredient'
        filterChips={IngredientsConstants}
        isExpanded={expandedAccordion === 1}
        onClick={() => handleAccordionClick(1)}
      />   
      
      <AccordionContainer
        icon={FitnessCenterOutlinedIcon}
        title='Calories'
        filterChips={CaloriesConstants}
        isExpanded={expandedAccordion === 2}
        onClick={() => handleAccordionClick(2)}
      />

      <AccordionContainer
        icon={SpaOutlined}
        title='Diet'
        filterChips={DietConstants}
        isExpanded={expandedAccordion === 3}
        onClick={() => handleAccordionClick(3)}
      /> 

      <AccordionContainer
        icon={SpaOutlined}
        title='Health'
        filterChips={HealthConstants}
        isExpanded={expandedAccordion === 4}
        onClick={() => handleAccordionClick(4)}
      /> 

      <AccordionContainer
        icon={RestaurantOutlined}
        title='Meal'
        filterChips={MealConstants}
        isExpanded={expandedAccordion === 5}
        onClick={() => handleAccordionClick(5)}
      /> 

      <AccordionContainer
        icon={FastfoodOutlined}
        title='Dish'
        filterChips={MealConstants}
        isExpanded={expandedAccordion === 6}
        onClick={() => handleAccordionClick(6)}
      /> 

      <AccordionContainer
        icon={PublicOutlined}
        title='Cuisine'
        filterChips={CuisineConstants}
        isExpanded={expandedAccordion === 7}
        onClick={() => handleAccordionClick(7)}
      /> 
    </>
  )
}

export default Accordions