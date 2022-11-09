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
        <img width="25%" className="grid-item" src={"http://localhost:8080/images/car/wheels.png"}/>
            <p>Aerodynamics play a fundamental role in the overall setup of a Formula One car. An air duct panel between the front wheel and the side panel, for instance, can add more speed than two or three extra horsepower. The teams invest as much as up to 20% of their total budget in understanding the aerodynamics of the car. </p>
      </Popover>
    </div>
    
  );

  
}

export default HaloPopover;