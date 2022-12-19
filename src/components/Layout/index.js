import React from 'react';
import AddsBar from '../AddsBar';
import { Outlet } from 'react-router-dom';
import ResponsiveAppBar from '../Navpar';
import Footer from '../Ffotertrue';

const Layout
 = () => {
  return (
    <>
    <AddsBar />
    <ResponsiveAppBar/>
    
    <Outlet/>
   
    <Footer/>


 </> )
}

export default Layout
