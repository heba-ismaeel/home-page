// import React from 'react';
import style from "./style.module.css";
import axios from 'axios';
import React ,{useState , useEffect}from 'react';
import LeftDiv from "./Leftdiv";

const PopUP2= () => {
   const [product, setproduct] = useState();
   async function getdata(){
  const prodata= await axios.get("https://dummyjson.com/products");
  setproduct(prodata.data);
  console.log(prodata);

   }
   useEffect(()=>{
   getdata();
   },[]);

 

  return (
    <>
    {/* الكبير */}
    <div className={style.bigcon}>
        {product.price}
       {/* الصور الكبيره +الصغيرة */}
        {/* <LeftDiv data={product}/> */}
        {/* {product.map((item)=>(
          <p>{item.price}</p>
)
)} */}

    </div>

   </>
  )
}

export default PopUP2
