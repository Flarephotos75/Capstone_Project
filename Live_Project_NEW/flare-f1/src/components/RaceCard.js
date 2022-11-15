import React from 'react'
import RaceAccordion from '../components/RaceAccordion'
import SearchBar from './SearchBar'

const RaceCard = ( {races} ) => {

  const raceData = races.map((races) => {
        return (
        <>
            <RaceAccordion key={races.id} races={races}/>
        </>
        )
    })


  return (
    <>

    <div className='table_layout'></div>
      <li role='list'>
        {raceData}
      </li>
    </>
    
  )

}

export default RaceCard;
