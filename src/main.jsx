import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css'; 
import './styles/general.css';
//import './styles/portfolio.css';

import App from './App';
//import Error from './pages/Error';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import AboutMe from './components/Pages/About';
import Portfolio from './components/Pages/Portfolio';
import Resume from './components/Pages/Resume';

// Define the accessible routes, and which components respond to which URL
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/AboutMe',
        element: <AboutMe />,
      },
      {
        path: '/Portfolio',
        element: <Portfolio />,
      },
      {
        path: '/Contact',
        element: <Contact />,
      },
      {
        path: '/Resume',
        element: <Resume />,
      },
    ],
  },
]);
console.log ('you should be attaching now')
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
