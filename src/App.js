import './App.css';
import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Laurinda from './components/Laurinda/Laurinda';
import Manoel from './components/Manoel/Manoel';
import Banner from './components/banner/banner';
import Fotos from './components/body/fotos';
import Rodape from './components/rodape/rodape';
import Routes1 from './routes1';
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
