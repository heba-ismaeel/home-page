import "./styles.css";
import FotLeft from "./FotLeft";
import FootRig from "./FootRig";
const Footer= () => {
    return (
      <>
      <div className="bigfoot">
 <div className="foot">
<FotLeft/>
<FootRig/>

 </div>
 <center><p className="cow">© Copyright Matter PTE LTD  2017 </p></center>
 </div>
      </>
    );
  };
  
  export default Footer;