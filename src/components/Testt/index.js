import style from './style.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import axios from 'axios';
import React ,{useState , useEffect}from 'react';


const SortFeature = () => {
  const [filtter, setfiltter] = useState([]);
   async function getData(){
    const product =  await axios.get ("https://fakestoreapi.com/products")
    setfiltter(product.data);


// console.log(product.data);
  }
useEffect(() => {
  getData();

  

}, []);
//   const arr=[];
//  filtter &&filtter.map((item)=>arr.add(item.title));
//  console.log(arr ,"arr");
//  const arr1=[];
//  filtter &&filtter.map((item)=>arr1.add(item.price));
//  console.log(arr1,"arr1");
// const titles = [...arr];
// const price = [...arr1];

     const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className={style.wrapper}>
        {/* <div className={style.container}> */}
     
        <p className={style.name}>Women</p>
           <div className={style.sort}>
            <p className={style.sortby} >Sort by</p>
            {/* */}
            
 <div className={style.sel}>
  <FormControl  sx={{minWidth:10}} >
    <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    sx={{minWidth: 150 ,
      height:40,
      }
      }
    
 
    onChange={handleChange}
  >
    <MenuItem value={10}>title</MenuItem>
    <MenuItem value={20}>Price</MenuItem>
 
  </Select>
</FormControl> </div>
</div>
    </div>
    // </div>
  )
}

export default SortFeature;
