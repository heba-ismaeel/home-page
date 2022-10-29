import Modal from 'react-modal';
import React,{useState} from 'react'

function modal ()  {
    const [modalIsOpen, setmodalIsOpen] = useState(false)
  return (
    
    <>
    <div className='modal1'>
    <button onClick={()=>setmodalIsOpen(true)} > Open </button>
     <Modal isOpen={modalIsOpen}>
    <h2>The Sideswept Dhoti</h2>
    <p>The Sideswept Dhoti + Bottom Line Grey (Silk)</p>
    <div> 
        <button onClick={()=>setmodalIsOpen(false)}> close</button>
    </div>
  </Modal></div>
  </>)
}
export default Modal;