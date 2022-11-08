import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeCard from '../components/HomeCard'
import DriverService from '../services/DriverService'
import TeamsService from '../services/TeamsService'
// import TracksService from '../services/TracksService'
import React from 'react';
import TeamsCard from '../components/HomeTeamsCard';

const HomeContainer = () => {

    const [driversList, setDriversList] = useState([])
    const [teamsList, setTeamsList] = useState([])
    // const [circuitsList, setCircuitsList] = useState([])


  useEffect(() => {
    DriverService.getAllDrivers()
    .then((allDrivers) => {
      setDriversList(allDrivers)
    })
  }, [])

  useEffect(() => {
    TeamsService.getAllTeams()
    .then((allTeams) => {
      setTeamsList(allTeams)
    })
  }, [])


//   useEffect(() => {
//     getAllTeams().then((allTeams) => {
//       setTeamsList(allTeams)
//     })
//   }, [])

//   useEffect(() => {
//     getAllTracks().then((allCircuits) => {
//         setCircuitsList(allCircuits)
//     })
//   }, [])


  return (
    <div>
      {/* <section>
        <h1 className='main-title'>WELCOME TO  FLARE-F1</h1>
      </section> */}


      <div className='stacked-group'>
        <div className='stacked-list'>
          <h4 className='stacked-group-title'>Drivers Championship</h4>
          <ul role='list' className='dash-list'>
            <HomeCard key={driversList.driver_id} drivers={driversList} />
          </ul>
          <Link to='/drivers' className='button primary dash'>
            Full Drivers List
          </Link>
        </div>


        <div className='stacked-list'>
          <h4 className='stacked-group-title'>Constructors Championship</h4>
          <ul role='list' className='dash-list'>
          <TeamsCard key={teamsList.team_id} listOfTeams={teamsList} />
          </ul>
          <Link to='/teams' className='button primary dash'>
            Full Teams List
          </Link>
        </div>


        {/* <div className='stacked-list'>
          <h4 className='stacked-group-title'>Circuits</h4> */}

          {/* <CircuitList circuits={circuitsList} /> */}
          {/* <Link to='/circuits' className='button primary dash'>
            All Circuits
          </Link>
        </div> */}
      </div>
    </div>
  )
}

export default HomeContainer;
