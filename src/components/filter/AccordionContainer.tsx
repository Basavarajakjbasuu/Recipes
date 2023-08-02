import { FC, ReactElement } from 'react';

import { AccordionButton, FilterChip } from '..';

interface AccordionContainerProps {
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
  selectedFilters: { value: string, name: string }[]; 
  onChange: (selectedFilters: { value: string, name: string }[]) => void;
}

const AccordionContainer: FC<AccordionContainerProps> = ({icon, title, filterChips, isExpanded, onClick, onChange, selectedFilters}): ReactElement => {

 
  const handleFilterChange = (filterValue: string, filterName: string) => {
    const filterIndex = selectedFilters.findIndex(
      (filter) => filter.name === filterName && filter.value === filterValue
    );

    if (filterIndex !== -1) {
      // Filter is already selected, remove it
      const updatedFilters = selectedFilters.filter(
        (filter) => filter.name !== filterName || filter.value !== filterValue
      );
      onChange(updatedFilters);
    } else {
      // Filter is not selected, add it
      const updatedFilters = [...selectedFilters, { value: filterValue, name: filterName }];
      onChange(updatedFilters);
    }
  };


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
                key={item.value}
                ariaLabel={item.ariaLabel}
                labelName={item.labelName}
                name={item.name}
                type={item.type}
                value={item.value}
                isSelected={selectedFilters.some(
                  (filter) => filter.name === item.name && filter.value === item.value)
                  }
                onChange={() => handleFilterChange(item.value, item.name)}
              />
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default AccordionContainer