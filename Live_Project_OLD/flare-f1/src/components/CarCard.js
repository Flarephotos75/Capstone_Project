import React from "react"
import Popover from '@mui/material/Popover';
import HaloPopover from './HaloPopover';
import WheelsPopover from './WheelsPopover';

const CarCard = () => {
    
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handlePopoverOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);


  return (

    
    <div className="grid-container">
      <img className="redbullGrid" src={"http://localhost:8080/images/car/RedBull.jpg"}/>
      <div className="aeroGrid" >
        AERODYNAMICS
        <img  width="100%" 
              src={"http://localhost:8080/images/car/aero.png"} 
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
          <img className="grid-item" src={"http://localhost:8080/images/car/aero.png"} usemap="#image-map"/>
              <p>Aerodynamics play a fundamental role in the overall setup of a Formula One car. An air duct panel between the front wheel and the side panel, for instance, can add more speed than two or three extra horsepower. The teams invest as much as up to 20% of their total budget in understanding the aerodynamics of the car. </p>
        </Popover>
      </div>
      <HaloPopover />
      <WheelsPopover />

     

    </div>
  );

  
}
        // <img className="carDisplay" src={"http://localhost:8080/images/car/RedBull.jpg"} usemap="#image-map"/>
        //     <map name="image-map">
        //         <area target="_blank" alt="Aerodynamcs" title="Aerodynamcs" coords="579,80,742,140"  href="" shape="rect"/>
        //         <area target="_blank" alt="Tyres" title="Tyres" href="" coords="371,262,76" shape="circle"/>
        //         <area target="_blank" alt="Halo" title="Halo" href="" coords="372,112,523,168" shape="rect"/>
        //     </map>
        // </>


export default CarCard;