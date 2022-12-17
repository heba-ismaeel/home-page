import React from 'react';
import {  MdKeyboardArrowRight } from "react-icons/md";
import styles from "./styles.module.css";



const path = () => {
  const arr=["Women","Pants","The  Sideswept  Dhoti"];
  return (
   <>
    <div className={styles.item}>
    
        {arr.map((item) => (
          <div  >
          <p  className={styles.par}>{item} <MdKeyboardArrowRight/>  </p>
         </div>
      ))}
    </div>
  </>)
}

export default path;