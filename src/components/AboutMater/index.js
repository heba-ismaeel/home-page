
import "./styles.css";
import Text from"./Text";
import Designer from"./Designer";

const AboutMater = () => {
  return (
    <>
    <div className="big">
   <p className="about">About Matter</p>
   <div className="mater">
    <Designer/>
<Text/>
   </div></div>
   </>
  );
};

export default AboutMater;