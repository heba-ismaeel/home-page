import React, { useState } from "react";
import Modal from "react-modal";
import Image from "./image";
import style from "./style.module.css";
import Details from "./Details";
import data from "../data.json";
import { useShoppingCart } from "../../../Context/ShoppingCardContext";

export const PopUp = ({ modalIsOpen, updatePopUp ,product,id}) => {
  const {getItemQuantity,increaseCartQuantity,decreaseCartQuantity}=useShoppingCart();
  const quantity=getItemQuantity(id);
  const {title,price,images,thumbnail,rating}=product
  const [rightImage, setRightImage]=useState({thumbnail})
  
  return (
    <Modal
      isOpen={modalIsOpen}
      style={{
        overlay: {
          backgroundColor: "grey",
        },
        content: {
          color: "#030303",
        },
      }}
    >
      <div className={style.wrapper}>
        <div className={style.title}>
          <h5>{title}</h5>
          <button class="fal fa-times fa-2x"  onClick={updatePopUp}>
            {" "}
          </button>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.left}>
          <Image images={images} thumbnail={thumbnail}  />
        </div>
        <div className={style.right}>
          <div className={style.container}>
            <h5 className={style.title}>{title} </h5>
            <div className={style.heading}>
              <h5 className={style.price}>{price}.00$ </h5>
              <div className={style.theWrapper}>
              <div className={style.rating}>
                  <a href="#5" title="Give 5 stars">★</a>
                  <a href="#4" title="Give 4 stars">★</a>
                  <a href="#3" title="Give 3 stars">★</a>
                  <a href="#2" title="Give 2 stars">★</a>
                  <a href="#1" title="Give 1 star">★</a>
                
                </div>
              <h5 className={style.rating}> {rating} of 5</h5>
              </div>
              
            </div>
            <hr />

            <div className={style.details}>
              <Details product={product} />
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default PopUp;