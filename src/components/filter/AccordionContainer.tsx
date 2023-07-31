import { FC, ReactElement } from 'react';

import { AccordionButton, FilterChip } from '..';

interface AccordionProp {
  icon: React.ElementType;
  title: string;
  filterChips: {
    labelName: string;
    type: string;
    name: string;
    value: string;
    ariaLabel: string;
  }[];
  isExpanded: boolean;
  onClick: () => void;
}

const AccordionContainer: FC<AccordionProp> = ({icon, title, filterChips, isExpanded, onClick}): ReactElement => {

  

  return (
    <div className='accordion-container'>
      <AccordionButton
        icon={icon}
        title={title}
        isExpanded={isExpanded}
        onClick={onClick}
      />

      <div className="accordion-content" id="cook-time">
        <div className="accordion-overflow" data-filter="timer">

          {
            filterChips.map((item) => (
              <FilterChip
                ariaLabel={item.ariaLabel}
                labelName={item.labelName}
                name={item.name}
                type={item.type}
                value={item.value}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AccordionContainer