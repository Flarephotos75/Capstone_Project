import DriversListHomeList from '../components/DriversListHomeList';
import React from 'react';

const DB = () => {
const {Client} = require('pg');

const client = new Client({
    host: "localhost",
    user: "Steven",
    port: 5432,
    password: "",
    database: "F1"
})

client.connect();

client.queryDrivers('SELECT * FROM drivers', (err, res) =>{
        return(
            <div>
                 <DriversListHomeList listOfDrivers={res.rows} />
            </div>
            )
})

}
export default DB;
