import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DriverService from '../services/DriverService'
import React from 'react';
import AllDriversCard from '../components/AllDriversCard'

const DriversContainer = () => {

    const [driversList, setDriversList] = useState([])

  useEffect(() => {
    DriverService.getAllDrivers()
    .then((allDrivers) => {
      setDriversList(allDrivers)
    })
  }, [])

  return (
    <div>
      <div className='stacked-group'>
        <div className='stacked-list'>
          <h4 className='stacked-group-title'>Drivers Information</h4><br />
          <ul role='list' className='dash-list'>
            <AllDriversCard key={driversList.driver_id} drivers={driversList} />
          </ul>
          <Link to='/drivers' className='button primary dash'>
            Full Drivers List
          </Link>
        </div>
        </div>
    </div>
  )
}

export default DriversContainer;
