import styles from "./styles.module.css";

 import { RiPlayCircleLine } from "react-icons/ri";


const Vedio = () => {
  const vedio=[
    ['assests/images/635c0a53670aa9b611314996afb28e7cbfb6a4ec.png',"Jamdani"],
    ['assests/images/2ef8f1a6888f5e313706fce9ac7b0c9d436b5104.png' ,"Lorem ipsum dolor sit amet"],
    ['assests/images/2f06e2ebbe92b4a0b18863c9322dba5d691c54fc.png' ,"Lorem ipsum dolor sit amet"]

  ];
  return (
    <>
    
 <div className={styles.bigcont}>
{vedio.map((item)=>
  <div className={styles.container}>
 <img src={item[0]} className={styles.img}></img>
 <center>
 <RiPlayCircleLine  className={styles.icon}/></center>
<div className={styles.par}> {item[1]}</div>
    </div>  
)}

</div>


    
  </>
  
  );
};

export default Vedio;