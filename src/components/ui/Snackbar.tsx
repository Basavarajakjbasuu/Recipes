import { FC, ReactElement} from 'react'

interface SnackbarProps {
  message: string;
}

const Snackbar: FC<SnackbarProps> = ({message}): ReactElement => {
  return (
    <div className='snackbar-container'>
      <div className="snackbar">
        <p className="body-medium">{message}</p>
      </div>
    </div>
  )
}

export default Snackbar