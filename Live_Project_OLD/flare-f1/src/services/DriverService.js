const driversURL = "http://localhost:8080/drivers"

const DriverService = {

getAllDrivers  () {
    return fetch(driversURL)
        .then((res) => res.json())
},


getDriver(id) {
    return fetch(driversURL + id)
    .then((res) => res.json())
  },
}

export default DriverService;