import React from 'react';
import styles from "./styles.module.css";
import Rating from './Rating';


const Creviews
 = () => {
  return (
    <>
    <div className={styles.cont}>
        <p className={styles.par}>Customer Reviews</p>
        <div className={styles.bigdiv}>
        <div className={styles.wraper}>
       <Rating/>
   
    <div className={styles.wraper2}>
        <p className={styles.par2}>Share your thoughts with other customers</p>
        <button className={styles.but}>Write a review</button>
    </div>
     </div>
     <p className={styles.par3}>Top Customers Reviews</p>
 <Rating/>
 <div className={styles.bycust} >
    <p className={styles.par4}>By</p>
    <p className={styles.par5}>Customer Name</p>
    <p className={styles.par4}>on February 18, 2017</p>
 </div>
 <p className={styles.par6}>
    Millions of Americans turn to Lasik Surgery when their vision is
     less than perfect and they’re tired of being tied down to wearing glasses or contacts. 
     What part of the eye is it that may be causing all your vision trouble? Your cornea! 
     When the shape of your cornea is irregular, the image on your retina is blurry and out-of-focus.
      The cornea is a part of your eye that works to focus light and projects an image on the retina.
       This focusing of light is called refraction. The 3 main types 
    of refractive errors are myopia 
    (nearsightedness), hyperopia (farsightedness) and astigmatism. 
    </p>
     <a href='Show more reviews'  className={styles.href}>Show more reviews</a>
    </div>
    </div>
    </>
  )
}

export default Creviews
