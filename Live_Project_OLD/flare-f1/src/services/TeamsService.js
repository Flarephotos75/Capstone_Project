import React from 'react';

const teamsURL = "https://f1.sportmonks.com/api/v1.0/teams/season/7?api_token=lFI3NTv1Il1180T1qLxoLkbApazvo9q6S0NLOU3UXz1nYwiidWFUgsc5Ull0"


export const getAllTeams = () => {
    return fetch(teamsURL)
        .then(res => res.json())
}

export default getAllTeams;