import React from 'react'


const DriversListHomeList = ( {drivers} ) => {

  const driverData = drivers.map((driver) => {

      

    return (
  

      <>
        <li  className='table_layout' >
         <th role='list'>Position</th>
            <td> {driver.position}</td>
         <th role='list'>Name</th>
            <td> {driver.driver_name}</td>
        </li>
        <hr />
      </>
    )
  })

  return (
    <>
    <div className='table_layout'></div>
      <ul role='list'>
        {driverData}
      </ul>
    </>
  )

}

export default DriversListHomeList
