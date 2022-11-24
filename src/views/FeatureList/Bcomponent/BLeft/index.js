import React from 'react';
import styles from './styles.module.css';
// import * as React from 'react';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import Paper from '@mui/material/Paper';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';


function BLeft
({data}) {
  const arr=[...data];
  console.log("hooooooooooo" +arr);

//  return (
//     arr.map((item)=>{
     
//  <div className={styles.bleft}> 
//     {item}
//     </div>
  
  
    <Paper sx={{ width: 230 }}>
      <MenuList>
        <MenuItem>
          <ListItemIcon>
            <SendIcon  />
          </ListItemIcon>
          {/* <Typography variant="inherit">{item}
          </Typography> */}
        </MenuItem>
       
        
      </MenuList>
    </Paper>
    return (
      
      <List
        sx={{
          width: '40%',
          maxWidth: 360,
          bgcolor: 'background.paper',
          position: 'relative',
          overflow: 'auto',
          maxHeight: 4000,
          fontSize: 20 ,
          '& ul': { padding: 3 },
        }}
        subheader={<li />}
      >
         {arr.map((sectionId)=>   (
          <li >
            <ul>
            {/* <ListSubheader>{`I'm sticky ${sectionId}`}</ListSubheader> */}

              <ListSubheader>{sectionId}</ListSubheader>
            
            </ul>
          </li>
        ))}
      </List>
    );
    }
export default BLeft;
