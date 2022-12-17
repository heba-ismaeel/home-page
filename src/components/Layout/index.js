import React from 'react';
import AddsBar from '../AddsBar';
import Footer from '../Footer';
// import Home from '../../views/Home';
import Header from '../Header';
import Assoon from '../Assoon';
import { Outlet } from 'react-router-dom';

const Layout
 = () => {
  return (
    <>
    <AddsBar />
    <Header/>
    
    <Outlet/>
   
    <Footer/>


 </> )
}

export default Layout
