import { FC, ReactElement, useContext } from 'react';

import { ThemeContext } from './context/themeProvider';
import { Footer, Header } from './components';

import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Saved from './pages/Saved';
import RecipeDetail from './pages/RecipeDetail'

const Layout = () => (
  <div>
    <Header />
      <Outlet />
    <Footer />
  </div>
) 

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'recipes',
        element: <Recipes />,
      },
      {
        path: 'recipe/:recipeId',
        element: <RecipeDetail />,
      },
      {
        path: 'saved',
        element: <Saved />
      },
    ]
  }
]);


const App: FC = (): ReactElement => {

  const { isDarkTheme } = useContext(ThemeContext);

  return (
    <div className="body" data-theme={isDarkTheme ===  true ? 'dark' : 'light'}>
      <RouterProvider router={router} />
    </div>
  )
}

export default App