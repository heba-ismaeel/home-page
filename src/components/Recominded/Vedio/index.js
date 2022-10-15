import "./styles.css";
 import { RiPlayCircleLine } from "react-icons/ri";


const Vedio = () => {
  return (
    <>
    
 <div className="vv">

 <div className="recphoto">
 <RiPlayCircleLine className="ved"/>
 <img src='assests\images\635c0a53670aa9b611314996afb28e7cbfb6a4ec.png' 
 className="recsrc"></img>
        
        <div className="recpar"> Jamdani</div>
    </div>  

    
 <div className="recphoto">
 <RiPlayCircleLine className="ved"/>
 <img src='assests\images\2ef8f1a6888f5e313706fce9ac7b0c9d436b5104.png' 
 className="recsrc"></img>
        
        <p className="recpar">Lorem ipsum dolor sit amet</p>
    </div>  
    
 <div className="recphoto">
 <RiPlayCircleLine className="ved"/>
 <img src='assests\images\2f06e2ebbe92b4a0b18863c9322dba5d691c54fc.png' 
 className="recsrc"    ></img>
        
        <p className="recpar"> Lorem ipsum dolor sit amet</p>
    </div>  


</div>


    
  </>
  
  );
};

export default Vedio;