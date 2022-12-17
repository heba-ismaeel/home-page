import FotLeft from "./FotLeft";
import FootRig from "./FootRig";
import style from "./style.module.css";
const Footer= () => {
    return (
      <>
      <div className={style.bigfoot}>
 <div className={style.foot}>
<FotLeft/>
<FootRig/>

 </div>
 <center><p className={style.cow}>© Copyright Matter PTE LTD  2017 </p></center>
 </div>
      </>
    );
  };
  
  export default Footer;
// import style from style../style.module.css";
// import FooterItem from "./Footeritem";
// import SubscribeItem from "./Subsicribe";
// const footerData = [
//   {
//     id: "1",
//     title: "Categories",
//     content: [
//       "About us",
//       "Testimonials",
//       "Contact",
//       "Journal",
//       "Privacy Policy",
//     ],
//   },
//   {
//     id: "2",
//     title: "Partners ",

//     content: ["Support", "Shipping & Returns", "Size Guide", "Product Care,"],
//   },
//   {
//     id: "3",
//     title: "Contact us",
//     content: [
//       "26A Pagoda St, TANGS,",
//       "Singapore, 058187",
//       "                ",
//       "+65 6221 5462",
//     ],
//   },
// ];
// const Footer = () => {
//   return (
//     <div className={style.container}>
//       <div className={style.topFooter}>
//         {footerData.map((footerdata) => {
//           const { id, title, content } = footerdata;
//           return (
//             <div className={style.footerData}>
//               <FooterItem key={id} id={id} title={title} content={content} />
//             </div>
//           );
//         })}
//         <SubscribeItem />
//       </div>

//       <p style={{ textAlign: "center" }}>
//         &copy; Copyright Matter PTE LTD 2017
//       </p>
//     </div>
//   );
// };

// export default Footer;