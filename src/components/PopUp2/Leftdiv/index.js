import React from 'react';
import style from './style.module.css';
// import style from './style.module.css';


const LeftDiv = ({data}) => {
    // const arr=[...data];
    console.log(data);
    // console.log(arr);
  return (
    <div >
      mhfhgdhgsgfsdfsa
        <div className={style.left}>
         {data.map((item)=>(
          <p>{item.price}</p>
)
)}
        </div>
        <div ></div>
    </div>
  )
}

export default LeftDiv