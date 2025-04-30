import { RouterProvider } from 'react-router-dom';
import { router } from './AppRouter.tsx';

export default function App() {
  return <RouterProvider router={router} />;
}