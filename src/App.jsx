// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Navigation from './components/Navigation';
import './styles/general.css'

function App() {
  
  return (
    <>
      <Navigation />
      <main className="mx-3">
        <Outlet />
      </main>
    </>
  );
}

export default App;
