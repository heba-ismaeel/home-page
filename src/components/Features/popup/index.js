import React from "react";
import Modal from "react-modal";
import Image from "./image";
import style from "./style.module.css";
import Details from "./Details";
import data from "../data.json";

export const PopUp = ({ modalIsOpen, updatePopUp ,product}) => {
  const {title,price,images,thumbnail,rating}=product
  
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
          <i class="fal fa-times fa-2x" onClick={updatePopUp}>
            {" "}
          </i>
        </div>
      </div>
      <div className={style.main}>
        <div className={style.left}>
          <Image images={images} />
          <div className={style.imgright}>
            <img
              src={thumbnail}
              alt=""
            />
          </div>
        </div>
        <div className={style.right}>
          <div className={style.container}>
            <h5 className={style.title}>{title} </h5>
            <div className={style.heading}>
              <h5 className={style.price}>{price}.00$ </h5>
              <h5 className={style.rating}> {rating} of 5</h5>
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
