import React from 'react'
import style from './style.module.css'

const Image =({images}) => {

  return (
    <div className={style.imgleft}>
      {images.map((item)=>{
        return(
          <button className={style.button}><img className={style.innerImg} src={item}></img></button>


        )


      })}

    </div> 
     )
}

export default Image