import './App.css';
import Banner from './components/banner/banner';
import Fotos from './components/body/fotos';
import Rodape from './components/rodape/rodape';
function App() {
  return (
    <div className='App'>
    <Banner />
    <Fotos/>
    <Rodape/>
    </div>
  );
}

export default App;
