import { useState, useEffect } from 'react'
import React from 'react';
import RaceCard from '../components/RaceCard'
import RaceResultsService from '../services/RaceResultsService';
import SearchBar from './SearchBarContainer';


const RaceResultsContainer = () => {

    const [raceResults, setRaceResults] = useState([])

  useEffect(() => {
    RaceResultsService.getAllRaceResults()
    .then((allRaces) => {
        setRaceResults(allRaces)
    })
  }, [])

  return (
      <div className='stacked-group'>
        <div className='stacked-list'>
          <h4 className='stacked-group-title'>All Race Results 2022</h4><br />
          <ul role='list' className='dash-list'>
            {/* <SearchBar races={raceResults} /> */}
            <RaceCard key={raceResults.id} races={raceResults} />
          </ul>
        </div>
    </div>
  )
}

export default RaceResultsContainer;
