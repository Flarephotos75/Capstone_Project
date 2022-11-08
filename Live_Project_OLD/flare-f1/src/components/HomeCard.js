import { useState, useEffect } from "react";
import DriverService from "../services/DriverService";
import React from 'react';
import DriversListHomeList from "./DriversListHomeList";



const HomeCard = ({drivers}) => {
    // const [driversList, setDriversList] = useState([])

// useEffect(() => {
//     DriverService.getAllDrivers()
//     .then(data => setDriversList(data))}
//     , [])
  return (
    <>
        <DriversListHomeList key={drivers.driver_id} listOfDrivers={drivers} />
    
    </>
  )
}

export default HomeCard;