import './rodape.css'
function Rodape(){
return(

<footer className="fim">
        <p className="texto">Uma homenagem de toda a sua linda familia</p>
        <div className="imagemFamilia">
            <img className="foto" src="./images/familiaBig.jpg"  alt="imagem familia" height="100%" width="100%"/>
        </div>
        <audio autoplay="autoplay" controls="controls">
<source src="images/manoelOficial.mp3" type="audio/mp3" />
seu navegador não suporta HTML5
</audio>
    </footer>

)
}
export default Rodape