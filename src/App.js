import './App.css';
import { HashRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Laurinda from './components/Laurinda/Laurinda';
import Manoel from './components/Manoel/Manoel';
function App() {
  return (
   <HashRouter>   
   <Routes>     
            <Route path="/" element={<Laurinda />} />
            <Route path="/manoel" element={<Manoel />} />
            </Routes>
        </HashRouter>
  );
}

export default App;
