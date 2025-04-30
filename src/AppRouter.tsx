import { createBrowserRouter } from 'react-router-dom';
import DrinksMainPage from './pages/DrinksMainPage.tsx';

export const router = createBrowserRouter([{
  path: '/',
  element: <DrinksMainPage />,
},
  // Other routes
]);
