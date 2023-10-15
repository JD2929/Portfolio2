// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import './styles/general.css'

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <Navigation />
      <main className="mx-3 jdspecial">
        <Outlet />
      </main>
    </>
  );
}

export default App;
