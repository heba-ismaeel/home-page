import "./styles.css";
import { MdFacebook } from "react-icons/md";
import { AiFillTwitterCircle } from "react-icons/ai";
const FootRig= () => {
    return (
      <>
      <center>
 <div className="foTright">
<div className="sub">Subscribe to newsletter</div> <br></br>
<div>
<input type={"email"} className=" inp"  placeholder="ENTER YOUR EMAIL"> 
</input>
<button className="inbut">Subscribe</button></div>

<div>

<MdFacebook className="icfoot"/>
<AiFillTwitterCircle className="icfoot"/></div>
 </div>
     </center> </>
    );
  };
  
  export default FootRig;