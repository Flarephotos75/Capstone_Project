import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import DriversHomeCard from './DriversHomeCard'

const DriversListHomeList = ( {listOfDrivers} ) => {


 const driverList = Object.keys(listOfDrivers)

  const driverData = driverList.map((drivers) => {
    return (
      
      <Link to={"/drivers/" + drivers.driver_id}>
        <li className='dash-list-item'>
          <DriversHomeCard key={drivers.driver_id} drivers={drivers} />
        </li>
        <hr />
      </Link>
    )
  })

  return (
    <>
      <ul role='list' className='dash-list'>
        {driverData}
      </ul>
    </>
  )

}

export default DriversListHomeList
