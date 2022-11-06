import { useState, useEffect } from "react";
import DriverService from "../services/DriverService";
import React from 'react';
import DriversListHomeList from "./DriversListHomeList";



const DriversHomeCard = () => {
    const [driversList, setDriversList] = useState([])

// useEffect(() => {
//     DriverService.getAllDrivers()
//     .then(data => setDriversList(data))}
//     , [])
  return (
    <>
      
        <DriversListHomeList listOfDrivers={driversList} />
    
    </>
  )
}

export default DriversHomeCard;