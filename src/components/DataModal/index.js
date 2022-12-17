
import React, { useContext } from "react";
import { ProductsContext } from "../../App";
import BoxHeader from "./BoxHeader/index.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import styles from "./styles.module.css";
import ProductImage from "./ProductImage/index.js";
import ProductDes from "./ProDes/index.js";

const ProductData = ({ id ,  close}) => {
  const productsData = useContext(ProductsContext);
  console.log(productsData);
  const viewedProduct = productsData.find((IDProduct) => IDProduct.id === id);
  // console.log("huioih  "+ ProductsContext.data);
  // console.log("heba"+productsData);
 //     <div>
  //   { productsData.map((item)=>{return (<>
  //   <h1>{item.price}</h1></>)})}

  //   </div>)
  // }
  // return("halla")
  if(productsData){
    return(
 <>
  <h1>{productsData.title}</h1>
       {/* <BoxHeader productTitle={viewedProduct.title} close={close}/>
      
      <Container>
        <Row className={styles.body}>
          <ProductImage image={viewedProduct.image} />
           <ProductDes
            title={viewedProduct.title}
            price={viewedProduct.price}
            description={viewedProduct.description}
            category={viewedProduct.category}
            rating={viewedProduct.rating.rate}
          />
          
        </Row>
      </Container> */}
    </>
  ); 
};
}

export default ProductData;