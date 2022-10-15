import "./styles.css";
import ListItems from "./ListItems";
import {AiOutlineHeart  } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";


import {AiOutlineShopping } from "react-icons/ai";
const Header = () => {
  return (
    <center>
    <div className="header-container">
      <ListItems />

      <div className="right">
        <p className="listbtn"> <a href="#login"  > login</a></p>
     <AiOutlineSearch className="icon1"/> 
      <AiOutlineHeart className="icon2"/>
     
      <AiOutlineShopping className="icon3" />
    </div></div>
  </center>);
};

export default Header;