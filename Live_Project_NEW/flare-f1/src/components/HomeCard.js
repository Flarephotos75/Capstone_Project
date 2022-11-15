import React from 'react';
import DriversListHomeList from "./DriversListHomeList";
import PlayAudio from './PlayAudio';



const HomeCard = ({drivers}) => {

 
  return (
    <>
        <DriversListHomeList key={drivers.driver_id} listOfDrivers={drivers} />
        {/* <PlayAudio /> */}
    </>

    
  )
}

export default HomeCard;