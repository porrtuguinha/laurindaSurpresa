import './banner.css'
import { Laurinda } from './laurinda'
var laurinda = new Laurinda;
function Banner(){
    return(
        <div className="inicio">
        <h1 className="texto">Homenagem para Manuel</h1>
        <p className="texto">Uma homenagem da familia silva para o casal Manuel e {laurinda.nome}</p>


    </div>

    )

    

}
export default Banner