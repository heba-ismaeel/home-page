import React from 'react';
import AddsBar from '../AddsBar';
import Header from "../Header";
import styles from "./styles.module.css";
import { MdKeyboardArrowDown} from "react-icons/md";



export const Shoppage
 = () => {
  return (
 <>
 <AddsBar/>
 <Header/>

 <div className={styles.sort}>
  <p>Women</p>
  <div className={styles.input}>
 <p className={styles.sortby}>Sort by</p> 

 <div >
  
  <input  className={styles.price} placeholder='price'   ></input>
  <p className={styles.down}> <MdKeyboardArrowDown/> </p>


</div>
  </div>



</div>

   </>)
}
export  default Shoppage;