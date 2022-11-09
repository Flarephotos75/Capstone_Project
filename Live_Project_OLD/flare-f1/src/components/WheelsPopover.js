import React from "react"
import Popover from '@mui/material/Popover';

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

    <div className="wheelsGrid" >
      WHEELS<br />
      <img  width="25%" 
          src={"http://localhost:8080/images/car/wheels.png"} 
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
        <img width="25%" className="grid-item" src={"http://localhost:8080/images/car/tyres.png"}/>
        <p>Formula One tyres play a significant role in the performance of a Formula One car. The tyres have undergone major changes throughout the history of Formula One with different manufacturers and specifications used in the sport.</p>      </Popover>
    </div>
    
  );

  
}

export default HaloPopover;