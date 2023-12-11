import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import { Timer } from '../screens/Timer';

export const router = createBrowserRouter([
  {
    path: paths.Timer,
    element: <Timer />,
  },
]);
