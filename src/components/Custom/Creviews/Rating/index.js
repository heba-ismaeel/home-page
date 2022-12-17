import React from 'react';
import styles from "./styles.module.css";


const Rating
 = () => {
  return (
   <>
    <div className={styles.rate}>
        <div className={styles.rating}>
                  <a href="#5" title="Give 5 stars">★</a>
                  <a href="#4" title="Give 4 stars">★</a>
                  <a href="#3" title="Give 3 stars">★</a>
                  <a href="#2" title="Give 2 stars">★</a>
                  <a href="#1" title="Give 1 star">★</a>
                </div>
                <h5 className={styles.rating}> 4.8 of 5</h5>
                </div>
   </>
  )
}

export default Rating
