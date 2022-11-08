import React from 'react'

const TeamsCard = ({ listOfTeams }) => {

console.log(listOfTeams)
    const teamData = listOfTeams.map((team) => {
        console.log(team)
        return (
            <>
                <li className= 'dash-list-item' >
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
