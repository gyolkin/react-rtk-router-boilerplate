import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/home';
import { baseLayout } from './layout/base-layout';

export const router = createBrowserRouter([
  {
    element: baseLayout,
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
    ],
  },
]);
