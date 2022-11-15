const teamsURL = "http://localhost:8080/teams"

const TeamsService = {



getAllTeams () {
    return fetch(teamsURL)
        .then((res) => res.json())
},


getTeam(id) {
    return fetch(teamsURL + id)
    .then((res) => res.json())
  },

}

export default TeamsService;