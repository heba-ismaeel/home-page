import React from 'react'
import style from './style.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';


const SortFeature = () => {
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
    <MenuItem value={10}>Rest</MenuItem>
    <MenuItem value={20}>Price</MenuItem>
 
  </Select>
</FormControl> </div>
</div>
    </div>
    // </div>
  )
}

export default SortFeature;
