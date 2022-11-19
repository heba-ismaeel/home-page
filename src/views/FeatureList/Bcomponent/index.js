import axios from 'axios';
import React ,{useState , useEffect}from 'react';
import Features from '../../../components/Features';
import BLeft from './BLeft';
import styles from './styles.module.css'


function Bcomponent() {
  const [filtter, setfiltter] = useState([]);
   async function getData(){
    const product =  await axios.get ("https://fakestoreapi.com/products")
    setfiltter(product.data);


console.log(product.data);
  }
useEffect(() => {
  getData();

  

}, []);
  const categories=new Set();
 filtter &&filtter.map((item)=>categories.add(item.category));
 console.log(categories);

const allcategories = {...categories};
console.log(allcategories);
  return (
    <>
    <div className={styles.bcomponent}>
<BLeft />
{/*filtter={categories} كانت فوق بين الاقواس  */}
<Features  className={styles.fea}/>
   </div>
  </> )
}

export default Bcomponent;