import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import ProductData from "../../DataModal";

const ProductModal = ({ productID }) => {
  Modal.setAppElement("#root");
  const [openModal, setOpenModal] = useState(true);
  const closeModal= ()=>{
    setOpenModal(false)
  }
  return (
    openModal && (
      <Modal
        style={{ overlay: { backgroundColor: "grey" } }}
        isOpen={openModal}
        onRequestClose={() => setOpenModal(false)}
        shouldCloseOnOverlayClick={false}
      >
        <ProductData id={productID}  close={closeModal}/>

      </Modal>
    )
  );
};

export default ProductModal;