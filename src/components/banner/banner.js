import './banner.css'
import { Laurinda } from './laurinda'
var laurinda = new Laurinda;
function Banner(){
    return(
        <div className="inicioLaurinda">
        <h1 className="textoLaurinda">Homenagem para Manoel</h1>
        <p className="textoLaurinda">Uma homenagem da familia silva para o casal Manoel e {laurinda.nome}</p>


    </div>

    )

    

}
export default Banner