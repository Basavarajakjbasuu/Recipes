import { FC, ReactElement } from 'react'

interface FilterChipProps {
  labelName: string;
  type: string;
  name: string;
  value: string;
  ariaLabel: string;
  isSelected: boolean; 
  onChange: (selectedFilters: { value: string, name: string }[]) => void; 
}

const FilterChip: FC<FilterChipProps> = ({ labelName, type, ariaLabel, name, value, isSelected, onChange }): ReactElement => {
 
  const handleChipChange = () => {
    onChange(isSelected ? [] : [{ value, name }]);
  };
  return (
    <label className="filter-chip label-large">
        {labelName}
      <input 
        type={type} 
        name={name} 
        value={value}
        aria-label={ariaLabel}
        checked={isSelected}
        onChange={handleChipChange}
        className="checkbox"
      />
    </label>
  )
}

export default FilterChip