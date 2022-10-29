import React from "react";
import style from "./style.module.css";
import QuantityCounter from "./QuantityCounter";

const Details = ({product}) => {
  const{category,stock,brand,description}=product
  return (
    <>
      <div className={style.main}>
        <h5 className={style.title}>Description</h5>
        <p className={style.description}>
          {description} 
        </p>
        {/* <button className={style.seeMore}>SEE MORE</button> */}
        <div className={style.container}>
        <div className={style.row}>
          <h6 className={style.header}>Category</h6>
          <p className={style.paragraph}>{category}</p>
        </div>
        <div className={style.row}>
          <h6 className={style.header}>Brand</h6>
          <p className={style.paragraph}>{brand}</p>
        </div>
        <div className={style.row}>
          <h6 className={style.header}>Stock</h6>
          <p className={style.paragraph}>{stock}</p>
        </div>
        </div>

        <div className={style.btnContainer}></div>
        <div className={style.quantity}>
          <h6 className={style.quantity2}>QUANTITY</h6>
          <QuantityCounter />
        </div>
       
      </div>
    </>
  );
};

export default Details;
