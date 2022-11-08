import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import HomeCard from '../components/HomeCard'
import DriverService from '../services/DriverService'
import TeamsService from '../services/TeamsService'
// import TracksService from '../services/TracksService'
import React from 'react';
import AllTeamsCard from '../components/AllTeamsCard';

const TeamsContainer = () => {

    const [teamsList, setTeamsList] = useState([])

    useEffect(() => {
        TeamsService.getAllTeams()
        .then((allTeams) => {
          setTeamsList(allTeams)
        })
      }, [])

      return (
    <div className='stacked-group'>
      <div className='stacked-list'>
      <h4 className='stacked-group-title'>Team Information </h4>
      <ul role='list' className='dash-list'>
      <AllTeamsCard key={teamsList.team_id} listOfTeams={teamsList} />
      </ul>
      <Link to='/teams' className='button primary dash'>
        Full Teams List
      </Link>
    </div>
</div>
      )
}

export default TeamsContainer;