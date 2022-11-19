import React from 'react';
import styles from "./styles.module.css";
import { MdKeyboardArrowDown} from "react-icons/md";


const Sort
 = () => {
  return (
    <>

<div className={styles.sort}>
<p className={styles.women}>Women</p>
<div className={styles.input}>
<p className={styles.sortby}>Sort by</p> 

<div >

<input  className={styles.price} placeholder='price'   ></input>
<p className={styles.down}> <MdKeyboardArrowDown/> </p>


</div>
</div>
</div>

  </>
  )
}

export default Sort
