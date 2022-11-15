const winnersURL = "http://localhost:8080/winners"

const WinnersService = {

getAllWinners  () {
    return fetch(winnersURL)
        .then((res) => res.json())
},


getWinnerByID(id) {
    return fetch(winnersURL + id)
    .then((res) => res.json())
  },
}

export default WinnersService;