import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import { IconButton } from '@mui/material';
import { AiOutlineMenu } from 'react-icons/ai'
// import MenuIcon from '@mui/icons-material/Menu';
import './styles.css'

export default function TemporaryDrawer() {
  const [open, setOpen] = React.useState(false);

  return (
    <div>
      <div className='menu-button'>
        
        <IconButton onClick={()=> setOpen(true)} >
          <AiOutlineMenu style={{color: '#fff'}} />
        </IconButton>
      </div>
      <Drawer anchor={'right'} open={open} onClose={()=>setOpen(false)}>
        <div className="drawer-div">
          <a href='/'>
            <p className='links'>News</p>
          </a>
          <a href='/about'>
            <p className='links'>About Us</p>
          </a>
          <a href='/contact'>
            <p className='links'>Contact US</p>
          </a>
        </div>
      </Drawer>
    </div>
  );
}
