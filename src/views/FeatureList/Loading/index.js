import React from 'react';
import styles from "./styles.module.css";
import { IoReloadOutline} from "react-icons/io5";



const Loading = () => {
  return (
    <>
    <center>
 <div className={styles.classIcon}>
 <div className={styles.load}><IoReloadOutline className={styles.icon}/>loading</div>
 
 </div> </center>
    </>
  )
}

export default Loading;
