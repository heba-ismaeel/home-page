import React from 'react';
import styles from "./styles.module.css";


const AsInsta = () => {
    const pic=[
        "assests/images/bd561c2928429cbbcc3ae1c05f4b3138d9c46ece.png",
        "assests/images/2adfd97352ef04d94e3076312fb0685a1b75e4a3.png",
        "assests/images/00e6e77e6b9fa4e24e5a54ab9a474af83255439c.png",
        "assests/images/1523bc6c3cf207c9a5d906e9a55ac79db27d0716.png",


    ]
  return (
    <> 
    <div className={styles.bigcont}>
    <div className={styles.insta}>As Seen On Instagram</div>
    
    <div className={styles.container}>
    
    {pic.map((item) => (
      <div  >
      <img  className={styles.img} src={item} ></img>

     </div>
  ))}
</div>
</div>
  </>
  )
}

export default AsInsta;