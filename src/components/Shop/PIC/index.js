import "./styles.css";
import { Button } from '@mui/material';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

const PIC = () => {
const [visebel, setvisebel] = useState(false);
const onClick = () => setvisebel(true)
 
   const arr=[
     [ "assests/images/c3d74b651e3f521439ae7e68750fa01c13171c98.png ","pants"],
      ["assests/images/ac22cf3d613f85df2f2d5fbe238567718c47fa96.png","Jumpsuits"],
      ["assests/images/ee642707bfa9abb265f97fb49aeca2886b3db030.png","Tops"],
      ["assests/images/2362345cd93c41ef9634d80b90866ae9394758d9.png","Accessories"]

   ]
  return (
    <>
    <div className="cc"> 
    {arr.map((item)=><> 
      <div className="shphoto" onClick={onClick}>
          { visebel ?  
          <Link to="/customer" className="picshop">
          Shop Now</Link>
           : null} 
         

          <p className="shopar"> {item[1]}</p>
      <img  className="shoppsrc"  src={item[0]} ></img>  
    </div> 
    </>
    )}</div>
 </>
  );
};

export default PIC;