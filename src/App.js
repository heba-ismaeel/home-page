import "./App.css";
import React from "react";
// import { FaBeer } from 'react-icons/fa';
import AddsBar from "./components/AddsBar";
import Header from "./components/Header";
import Perfume  from"./components/Perfume";

import AboutMater from"./components/AboutMater";
import Explore from "./components/Explore";
import Shop from "./components/Shop";
import Recominded from "./components/Recominded";
import Assoon from "./components/Assoon";
import Footer from "./components/Footer";
import  Features from "./components/Features";



  function App() {
 
  return (
    
    <>

    <AddsBar />
    
    <Header />
    <Perfume/>
 <Features/>
 
 
  
   
   <AboutMater/>
   <Explore/><br></br>
  <Shop/>
  <Recominded/>
  <Assoon/>
  <Footer/>
    </>
  );
};

export default App;