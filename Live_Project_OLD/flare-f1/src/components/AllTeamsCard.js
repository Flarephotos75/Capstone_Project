import React from 'react'
import Accordian from './TeamAccordian'

const TeamsCard = ({ listOfTeams }) => {

        const teamData = listOfTeams.map((team) => {
            return (<>       
                <img className='smallteamlogo' src={"http://localhost:8080" + team.image_path} width="200" height="144"/>
                <li><Accordian key={team.id} team={team}></Accordian></li>
            </>
            )
        })





        //         return (
//             <>
//                 <p>{team.name}</p>
//                 <img className='smallteamlogo' src={"http://localhost:8080" + team.image_path} width="200" height="144"/>
//                 <th>Team Name</th>
//                 <tr>{team.name}</tr>
//                 <th>Current Position</th> 
//                 <tr> {team.position}</tr>
//                 <th>Current Points</th> 
//                 <tr>{team.points}</tr>
//             <hr/>
//             </>
//     )
// })

return (
    <>
    <ul role= 'list' className = 'dash-list' >
        { teamData }
        </ul>
        </>
  )

}

export default TeamsCard
