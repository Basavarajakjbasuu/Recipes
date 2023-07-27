import {
  ReactNode,
  useState,
  createContext,
  FC,
  ReactElement,
  useEffect
} from 'react';

interface ThemeContextType {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType>({
  isDarkTheme: false,
  toggleTheme: () => {},
});

const ThemeProvider: FC<ThemeProviderProps> = ({ children }): ReactElement => {
  const [isDarkTheme, setIsDarkTheme] = useState<boolean>(false);

  const toggleTheme = (): void => {
    setIsDarkTheme((prevTheme) => !prevTheme)
  }

  useEffect(() => {
    const storedTheme = sessionStorage.getItem('theme');
    setIsDarkTheme(storedTheme === 'dark' || storedTheme === null);
  }, []);
  
  useEffect(() => {
    sessionStorage.setItem('theme', isDarkTheme ? 'light' : 'dark');
  }, [isDarkTheme]);

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider