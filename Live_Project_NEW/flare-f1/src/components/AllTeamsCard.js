import React from 'react'
import Accordian from './TeamAccordian'

const TeamsCard = ({ listOfTeams }) => {

        const teamData = listOfTeams.map((team) => {
            return (
            <>       
                <img className='smallteamlogo' src={"http://localhost:8080" + team.image_path} width="200" height="144"/>
                <li><Accordian key={team.id} team={team}></Accordian></li>
            </>
            )
        })

return (
    <>
        <ul role= 'list' className = 'dash-list' >
        { teamData }
        </ul>
    </>
  )

}

export default TeamsCard
