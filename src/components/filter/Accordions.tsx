import { FC, ReactElement, useState } from 'react';

import { 
  TimerOutlined, 
  SpaOutlined,
  RestaurantOutlined, 
  FastfoodOutlined, 
  PublicOutlined, 
  HealthAndSafetyOutlined, 
  EmojiFoodBeverageOutlined, 
  FitnessCenterOutlined
} from '@mui/icons-material';

import {
  CaloriesConstants,
  CuisineConstants,
  DietConstants,
  DishConstants,
  HealthConstants,
  IngredientsConstants,
  MealConstants,
  TimeConstants
} from '../constants';

import { AccordionContainer } from '..';

interface AccordionsProps {
  selectedFilters: { value: string, name: string }[];
  onChange: (selectedFilters: { value: string, name: string }[]) => void;
}

const Accordions: FC<AccordionsProps> = ({selectedFilters, onChange}): ReactElement => {

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
        selectedFilters={selectedFilters}
        onChange={onChange}
      />     
      
      <AccordionContainer
        icon={EmojiFoodBeverageOutlined}
        title='Ingredient'
        filterChips={IngredientsConstants}
        isExpanded={expandedAccordion === 1}
        onClick={() => handleAccordionClick(1)}
        selectedFilters={selectedFilters}
        onChange={onChange}
      />   
      
      <AccordionContainer
        icon={FitnessCenterOutlined}
        title='Calories'
        filterChips={CaloriesConstants}
        isExpanded={expandedAccordion === 2}
        onClick={() => handleAccordionClick(2)}
        selectedFilters={selectedFilters}
        onChange={onChange}
      />

      <AccordionContainer
        icon={SpaOutlined}
        title='Diet'
        filterChips={DietConstants}
        isExpanded={expandedAccordion === 3}
        onClick={() => handleAccordionClick(3)}
        selectedFilters={selectedFilters}
        onChange={onChange}
      /> 

      <AccordionContainer
        icon={HealthAndSafetyOutlined}
        title='Health'
        filterChips={HealthConstants}
        isExpanded={expandedAccordion === 4}
        onClick={() => handleAccordionClick(4)}
        selectedFilters={selectedFilters}
        onChange={onChange}
      /> 

      <AccordionContainer
        icon={RestaurantOutlined}
        title='Meal'
        filterChips={MealConstants}
        isExpanded={expandedAccordion === 5}
        onClick={() => handleAccordionClick(5)}
        selectedFilters={selectedFilters}
        onChange={onChange}
      /> 

      <AccordionContainer
        icon={FastfoodOutlined}
        title='Dish'
        filterChips={DishConstants}
        isExpanded={expandedAccordion === 6}
        onClick={() => handleAccordionClick(6)}
        selectedFilters={selectedFilters}
        onChange={onChange}
      /> 

      <AccordionContainer
        icon={PublicOutlined}
        title='Cuisine'
        filterChips={CuisineConstants}
        isExpanded={expandedAccordion === 7}
        onClick={() => handleAccordionClick(7)}
        selectedFilters={selectedFilters}
        onChange={onChange}
      /> 
    </>
  )
}

export default Accordions