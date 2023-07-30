import { FC, ReactElement} from 'react'

const CardSkeleton: FC = (): ReactElement => {
  return (
    <div className="card skeleton-card">

      <div className="skeleton card-banner"></div>

      <div className="card-body">
      
        <div className="skeleton card-title"></div>
        <div className="skeleton card-text"></div>

      </div>

    </div>
  )
}

export default CardSkeleton