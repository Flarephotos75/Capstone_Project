import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import DriversHomeCard from '../components/DriversHomeCard'
import DriverService from '../services/DriverService'
import TeamsService from '../services/TeamsService'
import TracksService from '../services/TracksService'
import React from 'react';

const HomeContainer = () => {

    const [driversList, setDriversList] = useState([])
    // const [teamsList, setTeamsList] = useState([])
    // const [circuitsList, setCircuitsList] = useState([])


  // useEffect(() => {
  //   DriverService.getAllDrivers()
  //   .then((allDrivers) => {
  //     setDriversList(allDrivers)
  //   })
  // }, [])

  console.log(driversList)

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
          <h4 className='stacked-group-title'>Drivers</h4>
          <ul role='list' className='dash-list'>
            <DriversHomeCard drivers={driversList} />
          </ul>
          <Link to='/drivers' className='button primary dash'>
            Full Drivers List
          </Link>
        </div>


        {/* <div className='stacked-list'>
          <h4 className='stacked-group-title'>Teams</h4> */}
{/* 
          <TeamsList teams={teamsList} />
          { <Link to='/teams' className='button primary dash'>
            Full Teams List
          </Link>
        </div> */}


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
