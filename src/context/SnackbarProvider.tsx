import { useState, ReactNode, FC } from 'react';
import SnackContext from './SnackbarService';
import { Snackbar } from '../components';

interface SnackbarProps {
  children: ReactNode
}

export const SnackbarProvider: FC<SnackbarProps> = ({ children }) => {
  const [snackbarMessage, setSnackbarMessage] = useState('')
  
  const showSnackbarMessage = (message: string) => {
    setSnackbarMessage(message);
    setTimeout(() => {
      setSnackbarMessage('');
    }, 3000); 
  };


  return (
    <SnackContext.Provider value={{ showSnackbarMessage }}>
      {children}
      {snackbarMessage && <Snackbar message={snackbarMessage} />}
    </SnackContext.Provider>
  )
}