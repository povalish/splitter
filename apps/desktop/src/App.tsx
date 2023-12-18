import { RouterProvider } from 'react-router-dom';
import './tailwind.css';
import { router } from './navigation/router';

// Router
//

const App = () => <RouterProvider router={router} />;

export default App;
