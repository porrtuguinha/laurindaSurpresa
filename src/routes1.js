import { BrowserRouter, HashRouter } from 'react-router-dom'
import { Route, Routes } from 'react-router-dom'
import Laurinda from './components/Laurinda/Laurinda'
import Manoel from './components/Manoel/Manoel'
const Routes1 =() =>{
<BrowserRouter>
    <Routes>
    <Route element = {<Laurinda/>} path="/" exact/>
    <Route element= {<Manoel/>} path= "/manoel"/>

    </Routes>

</BrowserRouter>



}
export default Routes1