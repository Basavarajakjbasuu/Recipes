import { ExpandMoreOutlined } from '@mui/icons-material'
import { FC, ReactElement, createElement } from 'react';

interface AccordionBtnProps {
  icon: React.ElementType;
  title: string;
  isExpanded: boolean;
  onClick: () => void;
}

const AccordionButton: FC<AccordionBtnProps> = ({icon, title, isExpanded, onClick}): ReactElement => {
  return (
    <button
      className="accordion-btn has-state"
      aria-controls='cook-time'
      aria-expanded={isExpanded}
      onClick={onClick}
    >
      <span className="material-symbols-outlined">
        {icon && createElement(icon, { style: { fontSize: '20px' } })}
      </span> 

      <p className="label-large">{ title }</p>

      <span className="material-symbols-outlined trailing-icon" aria-hidden="true">
        <ExpandMoreOutlined fontSize='inherit' />
      </span>

    </button>
  )
}

export default AccordionButton