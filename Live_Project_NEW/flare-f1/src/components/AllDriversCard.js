import React from 'react'
import Accordian from './DriverAccordian'


const AllDriversCard     = ( {drivers} ) => {

    

  const driverData = drivers.map((driver) => {
        return (<>
            <img src={"http://localhost:8080" + driver.image_path} width="144" height="144"/>
            <Accordian key={driver.id} driver={driver}/>
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
