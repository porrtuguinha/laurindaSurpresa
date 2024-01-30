import ManoelBanner from "../Banner2/ManoelBanner";
import FotosManoel from "../FotosManoel/FotosManoel";
import "./Manoel.css"

function Manoel() {
    return (
      <div className='Manoel'>
      <ManoelBanner />
      <FotosManoel/>
      </div>
    );
  }
  
  export default Manoel;