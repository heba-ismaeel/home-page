import React, { useState } from "react";
import style from "./style.module.css";

const Image = ({ images,thumbnail }) => {
  const [rasha,setRasha]=useState(images[0])
  const handleClick=(item)=>{
    const selectedImg=images[item]
    setRasha(selectedImg)
  }
  return (
    <>  <div className={style.imgleft}>
    {images.map((item,i) => {
      return (
        <div className={style.pointer} >
          <img className={rasha ===item? style.border : style.button}src={item} onClick={()=>handleClick(i)}></img>
        </div>
      );
    })}
  </div>
  <div className={style.imgright}>
  <img
    src={rasha}
    alt=""
  />
</div></>
   
  );
};

export default Image;