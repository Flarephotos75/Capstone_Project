const racesURL = "http://localhost:8080/raceresults"

const RaceResultsService = {

getAllRaceResults () {
    return fetch(racesURL)
        .then((res) => res.json())
},

}

export default RaceResultsService;