import React from 'react';
import styles from './styles.module.css';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItem from '@mui/material/ListItem';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import 'bootstrap/dist/css/bootstrap.css';

import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
  

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Login() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button   onClick={handleClickOpen}>
<p className={styles.login}> <u>LogIn</u>  </p>    
</Button>
      <Dialog 
      // className={styles.dia}
      // width="80%"
        //  fullScreen
         sx={
          {
            // width:80vw,
            // border:red  2 'solid',
          }
         }
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              LogIn
            </Typography>
            {/* <Button autoFocus color="inherit" onClick={handleClose}>
              save
            </Button> */}
          </Toolbar>
        </AppBar>
        {/* <List>
          <ListItem button>
            <ListItemText primary="Phone ringtone" secondary="Titania" />
          </ListItem>
          <Divider />
          <ListItem button>
            <ListItemText
              primary="Default notification ringtone"
              secondary="Tethys"
            />
          </ListItem>
        
    </List> */}
     <MDBContainer  className="p-3 my-5 d-flex flex-column w-50">
     {/* Email address */}
<MDBInput wrapperClass='mb-4'   label='Email address' id='form1' type='email'/>
{/* Password */}
<MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

<div className="d-flex justify-content-between mx-3 mb-4">
  <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
  <a href="!#">Forgot password?</a>
</div>

<MDBBtn className="mb-4">Sign in</MDBBtn>

<div className="text-center">
  <p>Not a member? <a href="#!">Register</a></p>
  <p>or sign up with:</p>

  <div className='d-flex justify-content-between mx-auto' style={{width: '40%'}}>
    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='facebook-f' size="sm"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='twitter' size="sm"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='google' size="sm"/>
    </MDBBtn>

    <MDBBtn tag='a' color='none' className='m-1' style={{ color: '#1266f1' }}>
      <MDBIcon fab icon='github' size="sm"/>
    </MDBBtn>

  </div>
</div>

</MDBContainer>
      </Dialog>

   


    </div>
  );
}

