import { createMemoryRouter } from 'react-router-dom';
import { paths } from './paths';
import { Timer } from '../screens/Timer';

export const router = createMemoryRouter([
  {
    path: paths.Timer,
    element: <Timer />,
  },
]);
