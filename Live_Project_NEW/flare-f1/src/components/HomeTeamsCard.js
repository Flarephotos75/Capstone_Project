import React from 'react'

const TeamsCard = ({ listOfTeams }) => {

console.log(listOfTeams)
    const teamData = listOfTeams.slice(0, 5).map((team) => {
        console.log(team)
        return (
            <>
                <li className= 'dash-list-item' >
                    <img className='smallteamlogo' src={"http://localhost:8080" + team.image_path} width="100" height="72"/>
                    <p>{ team.name } </p>
                </li>
            <hr/>
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
