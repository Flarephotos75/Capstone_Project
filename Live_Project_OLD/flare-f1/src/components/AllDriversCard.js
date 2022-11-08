import React from 'react'


const AllDriversCard     = ( {drivers} ) => {

  const driverData = drivers.map((driver) => {

    return (
  

      <>
        <div>
        <img src={"http://localhost:8080" + driver.image_path} width="144" height="144"/>
         <p >Position </p>
         <p >Driver Name</p>
            <p> {driver.position}</p>
            <p> {driver.driver_name}</p>
        <hr />
        </div>
      </>
    )
  })

  return (
    <>
    <div className='table_layout'></div>
      <li role='list'>
        {driverData}
      </li>
    </>
  )

}

export default AllDriversCard;
