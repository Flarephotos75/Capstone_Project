import React, { Fragment, useEffect, useState } from "react";


    const GetTop5Teams = () => {

    const [teams, setTeams] = useState([]);

const getTeams = async () => {
    try {
        const response = await fetch("http://localhost:8080/teams")
        const teamData = await response.json()

        setTeams(teamData);

    } catch (err) {
        console.error(err.message)
        
    }
}

useEffect(() => {
    getTeams();
},[]);

    return (
        <Fragment>
            <h2>TOP 5 Teams</h2>
            {teams.slice(0,5).map(team => (
                <li key={team.id}>
                    {team.name}
                </li>
            ))}
        </Fragment>
    );
};


export default GetTop5Teams;