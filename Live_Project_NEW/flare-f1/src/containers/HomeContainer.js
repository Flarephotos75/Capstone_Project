import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeCard from '../components/HomeCard'
import DriverService from '../services/DriverService'
import TeamsService from '../services/TeamsService'
import React from 'react';
import TeamsCard from '../components/HomeTeamsCard';
import TwitterFeed from '../components/TwitterFeed'

const HomeContainer = () => {

    const [driversList, setDriversList] = useState([])
    const [driverId, setDriverId] = useState([])
    const [teamsList, setTeamsList] = useState([])

    const drvId = driversList.driver_id


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

  useEffect(() => {
    DriverService.getDriver(drvId)
    .then((id) => {
      setDriverId(id)
    })
  }, [])

  return (
    
    <div>
       <div>
          <TwitterFeed />          
        </div>

      <div className='stacked-group'>
        <div className='stacked-list'>
          <h4 className='stacked-group-title'>Drivers Championship</h4>
          <ul role='list' className='dash-list'>
            <HomeCard key={driversList.driver_id} drivers={driversList} />
          </ul>
          <Link to={'/drivers/' + driverId.driver_id}> <HomeCard key={driverId.driver_id} drivers={driverId}/></Link>
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
      </div>
    </div>
  )

}

export default HomeContainer;
