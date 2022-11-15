import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import WinnersService from '../services/WinnersService'
import React from 'react';


const DriversContainer = () => {

    const [winnersList, setWinnersList] = useState([])

  useEffect(() => {
    WinnersService.getAllWinners()
    .then((allDrivers) => {
      setWinnersList(allDrivers)
    })
  }, [])

  return (
      <div className='stacked-group'>
        <div className='stacked-list'>
          <h4 className='stacked-group-title'>Drivers Information</h4><br />
          <ul role='list' className='dash-list'>
            <AllDriversCard key={winnersList.driver_id} winners={winnersList} />
          </ul>
        </div>
    </div>
  )
}

export default DriversContainer;
