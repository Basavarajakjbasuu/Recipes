import { createContext, useContext } from 'react';

interface SnackbarContextType {
  showSnackbarMessage: (message: string) => void,
}

const SnackContext = createContext<SnackbarContextType>({
  showSnackbarMessage: () => { },
})

export const useSnackBar = () => useContext(SnackContext);

export default SnackContext