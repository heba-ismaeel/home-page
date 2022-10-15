
import React from 'react';
import Left from './Left';
import Center from './Center';
import Right from './Right';
import BUTON from './BUTON';
import "./styles.css";
const Explore = () => {
  return (
    <>
    <div className='big3'>
    <div className="pex">Explore</div>
    <div className='contae'>
     <div> <Left/></div>
    <div><Center/></div>
    <div><Right/></div> 
    
    </div>
   
   <div><BUTON/></div> 
  </div></>);
};

export default Explore;