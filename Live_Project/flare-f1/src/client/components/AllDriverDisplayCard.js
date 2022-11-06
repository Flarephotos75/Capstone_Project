import React, { Fragment, useEffect, useState } from "react";


const GetTop5Drivers = () => {

const getDrivers = async () => {
    try {
        const response = await fetch("http://localhost:8080/drivers")
        const driverData = await response.json()

        console.log("JSON DATA *****", driverData)



    } catch (err) {
        console.error(err.message)
        
    }
}

useEffect(() => {
    getDrivers();
});


    return (
   <h2>TOP 5 Drivers</h2>
    );
};

export default GetTop5Drivers;