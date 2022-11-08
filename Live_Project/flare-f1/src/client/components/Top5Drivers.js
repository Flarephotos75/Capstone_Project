import React, { Fragment, useEffect, useState } from "react";


    const GetTop5Drivers = () => {

    const [drivers, setDrivers] = useState([]);

const getDrivers = async () => {
    try {
        const response = await fetch("http://localhost:8080/drivers")
        const driverData = await response.json()
        setDrivers(driverData);

    } catch (err) {
        console.error(err.message)
        
    }
}

useEffect(() => {
    getDrivers();
},[]);

    return (
        <Fragment>
            <h2>TOP 5 Drivers</h2>
            {drivers.slice(0,5).sort((a, b) => a.position - b.position ? 1: -1).map(driver => (
                <li key={driver.position}>
                    {driver.driver_name}
                </li>
            ))}
        </Fragment>
    );
};


export default GetTop5Drivers;