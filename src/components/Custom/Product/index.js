// import React from 'react';
import axios from 'axios';
import React ,{useState , useEffect}from 'react';
import style from './style.module.css';


const Product22 = () => {
    const [product, setproduct] = useState([]);
    async function getData(){
      const   datapro=await axios.get("https://fakestoreapi.com/products");
    setproduct(datapro.data);
//  console.log(product+"hyyy");
   }

 useEffect(() => {
   getData();

 }, []);



return (

    <div className={style.feature_wrap}>
      <h1 className={style.featured_h1}>You May Also Like</h1>
      <div className={style.flex_box}>
        {product.map((item,index) => {
         return (index>4 ||index==0)? '': (
            <div className={style.inner_flex}>
              <img
                className={style.item_picture}
                src={item.image}
                alt="picture"
              />
             
              <p className={style.title}>{item.title}</p>
              <p className={style.price}>{item.price}.00$</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product22;
