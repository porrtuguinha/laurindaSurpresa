import './rodape.css'
import { Link } from "react-router-dom"
function Rodape(){
return(

<footer className="fim">
        <p className="texto">Uma homenagem de toda a sua linda familia</p>
        <Link className='textoButton' to="/manoel" ><button className='ButtonManoel' >Conheça o local onde manoel viveu</button></Link>
        <div className="imagemFamilia">
            <img className="foto" src="./images/familiaBig.jpg"  alt="imagem familia" height="100%" width="100%"/>
        </div>
        <audio className='audio' autoplay="autoplay" controls="controls">
<source src="images/manoelOficial.mp3" type="audio/mp3" />
</audio>
    </footer>

)
}
export default Rodape