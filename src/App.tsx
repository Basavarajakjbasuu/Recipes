import { FC, ReactElement, useContext } from 'react';
import Home from './pages/Home';
import { ThemeContext } from './context/themeProvider';

const App: FC = (): ReactElement => {

  const { isDarkTheme } = useContext(ThemeContext)
  return (
    <div className="body" data-theme={isDarkTheme ===  true ? 'dark' : 'light'}>
    <Home />
    </div>
  )
}

export default App