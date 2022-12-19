import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import Perfume1 from './Perfume';
import Features1 from './Features';
import Explore1 from './Explore';
import SortFeature from './components/Testt';
import Customer from './Customer';

import AboutUs from './views/About';
import Test1 from './components/Testt/Test';
import {useState,useEffect} from 'react';
// import ListingProduct from './components/ListingProduct';
// import LOgin from './components/Llogin';
import Navpar from './Navpar';
import Footer from './components/Ffotertrue';

import axios from 'axios';

const Router = () => {
  // const [post, setpost] = useState([]);

  //     useEffect(() => {
  //       // let target = false;
  //       // if (!target) {
  //         axios
  //           .get("https://api.storerestapi.com/products")
  //           .then((response) => setpost(response.data));
  //       // }
  //       // return () => {
  //       //   // cancel the subscription
  //       //   target = true;
  //       // };
  //     }, []);
    
  
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
<Route path="Perfume" element={<Perfume1/>} />
<Route index element={<Home/>} /> 
<Route path="Features" element={<Features1/>} />  
<Route path='SortFeature' element={<Test1 />}/>
 <Route path='Explore' element={<Explore1/>}/> 
 <Route path='Customer' element={<Customer/>}/>  

</Route>

<Route path="*" element={<h1> Not Found!!!</h1>} /> 
  
  </Routes>
    </BrowserRouter>

)
}

export default Router