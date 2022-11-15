import React from 'react'

const DriversListHomeList = ( {listOfDrivers} ) => {

  const driverData = listOfDrivers.slice(0, 5).map((driver) => {

    return (
      <>
        <li  className='dash-list-item' >
        <img src={"http://localhost:8080" + driver.image_path} width="79" height="79"/>
          <p > {driver.driver_name}</p>
        </li>
        <hr />
      </>
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
