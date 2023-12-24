import React from 'react';
import './tailwind.css';
import { RouterProvider } from 'react-router-dom';
import { router } from './navigation/router';

// Router
//

const App = () => <RouterProvider router={router} />;

export default App;
