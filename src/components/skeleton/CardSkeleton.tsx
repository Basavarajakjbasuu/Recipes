import { FC, ReactElement} from 'react'

interface SkeletonProp {
  type: string
}
const CardSkeleton: FC<SkeletonProp> = ({type}): ReactElement => {

  const CardSkeleton = () => (
    <div className="card skeleton-card">

      <div className="skeleton card-banner"></div>

      <div className="card-body">
      
        <div className="skeleton card-title"></div>
        <div className="skeleton card-text"></div>

      </div>

    </div>
  )
  if (type === 'card') {
    const skeleton = Array(12).fill(true).map((_, i) => <CardSkeleton key={i} />);
    return <>{skeleton}</>;
  }

  return <></>
}

export default CardSkeleton