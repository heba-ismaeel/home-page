import React from 'react';
import styles from "./styles.module.css";

const Lorem
 = () => {
    const arrpic=[
        "assests/images/23b6a61cf7e04aa0f65cfba9c2c782a1cc814b81.png",
       "assests/images/pic2.png",
       "assests/images/5dde6465fbcdab39c91f2f5d98796669d9b48c40.png"
    ]
  return (
    <>
    <div className={styles.container}>
    
    {arrpic.map((item) => (
      <div  >
      <img  className={styles.img} src={item} ></img>
      <p className={styles.par}>Lorem ipsum dolor sit amet</p>

     </div>
  ))}
</div>
<div className={styles.divpar}>
    <p className={styles.par2}>Lorem Ipsum is simply
     dummy text of the printing and typesetting industry.
      Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, 
      when an unknown printer took a galley of type and scrambled it to make a type 
      specimen book. It has survived not only five centuries, but also the leap into electronic 
      typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release 
      of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
    software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
</div>
</>  )
}

export default Lorem
