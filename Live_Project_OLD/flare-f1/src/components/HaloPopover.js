import React from "react"
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

const HaloPopover = () => {
    
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (

    <div className="haloGrid" >
      <img  width="100%" 
          src={"http://localhost:8080/images/car/halo.png"} 
          usemap="#image-map"
          aria-owns={open ? 'mouse-over-popover' : undefined}
          aria-haspopup="true"
          onMouseEnter={handlePopoverOpen}
          onMouseLeave={handlePopoverClose}
        />
      
      <Popover
        id="mouse-over-popover"
        sx={{
          pointerEvents: 'none',
        }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        onClose={handlePopoverClose}
        disableRestoreFocus
      >
        <img className="grid-item" src={"http://localhost:8080/images/car/halo.png"}/><img width="20%" className="grid-item" src={"http://localhost:8080/images/car/romain.png"}/>
        <p>The Halo is a protective barrier that helps to prevent large objects and debris from entering the cockpit of a single-seat racing car.  This saved the life of 
Romain Grosjean in 2020 after a horrific crash in Bahrain</p>      
        </Popover>
    </div>
    
  );

  
}

export default HaloPopover;