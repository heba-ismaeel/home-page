// import React from "react";
import Router from "./router";
import ShoppingCardProvider from "./Context/ShoppingCardContext";
import axios from "axios";
import React, { useState, useEffect, createContext } from "react";
export const ProductsContext = createContext(null);
  function App() {

    const url = "https://fakestoreapi.com/products";

    const [products, setProducts] = useState(null);
    useEffect(() => {
      axios.get(url).then((response) => {
        setProducts(response.data);
        console.log(products);

      });
    }, [url]);

    
    if(products){
     

  return (
    
    <>
    <ShoppingCardProvider>
    <ProductsContext.Provider value={products}>
     <Router/>
   </ProductsContext.Provider>
   </ShoppingCardProvider>
    
  </>
  );
};}

export default App;