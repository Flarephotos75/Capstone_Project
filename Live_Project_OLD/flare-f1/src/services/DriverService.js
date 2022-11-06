import React from 'react';
import queryDrivers from '../server/DB';


// const driversURL = "https://f1.sportmonks.com/api/v1.0/drivers/season/7?api_token=lFI3NTv1Il1180T1qLxoLkbApazvo9q6S0NLOU3UXz1nYwiidWFUgsc5Ull0"

const driversURL = "http://localhost:5432/"

const DriverService = {

    getAllDrivers(){
        return queryDrivers
    },
  

// getAllDrivers  () {
//     return fetch(driversURL)
//         .then((res) => res.json())
// },


// getDriver(id) {
//     return fetch(driversURL + id)
//     .then((res) => res.json())
//   },



}




export default DriverService;