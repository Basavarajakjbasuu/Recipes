import { FC, ReactElement } from 'react'

interface FilterChipProps {
  labelName: string;
  type: string;
  name: string;
  value: string;
  ariaLabel: string;
}

const FilterChip: FC<FilterChipProps> = ({labelName, type, ariaLabel, name, value}): ReactElement => {
  return (
    <label className="filter-chip label-large">
        {labelName}
      <input 
        type={type} 
        name={name} 
        value={value}
        aria-label={ariaLabel}
        className="checkbox"
      />
    </label>
  )
}

export default FilterChip