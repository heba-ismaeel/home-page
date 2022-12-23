import React from 'react';
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './views/Home';
import Perfume1 from './Perfume';
import Features1 from './Features';
import Explore1 from './Explore';
import Customer from './Customer';
import Test1 from './components/Testt/Test';
import Login from './components/NewLogin';
const Router = () => {

    
  
  return (
    <BrowserRouter>
    <Routes>
        <Route element={<Layout/>}>
<Route path="Perfume" element={<Perfume1/>} />
<Route index  element={<Home/>} /> 
<Route  path ="home" element={<Home/>} /> 

<Route path="Features" element={<Features1/>} />  
<Route path='SortFeature' element={<Test1 />}/>
 <Route path='Explore' element={<Explore1/>}/> 
 <Route path='Customer' element={<Customer/>}/>
  
 <Route path='Login' element={<Login/>}/>  


</Route>
<Route path='Login' element={<Login/>}/>  

<Route path="*" element={<h1> Not Found!!!</h1>} /> 
  
  </Routes>
    </BrowserRouter>

)
}

export default Router