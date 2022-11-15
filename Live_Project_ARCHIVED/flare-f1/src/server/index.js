const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db")

// middleware
app.use(cors());
app.use(express.json());

//Routes

//GetTop5Drivers
app.get("/", async(req, res) =>{
    try {
        const getTop5Drivers = await pool.query("SELECT * FROM drivers WHERE position < 6")
        res.json(getTop5Drivers.rows)
    }
    catch (err) {
        console.log(err.message);
    }
})

//GetAllDrivers
app.get("/drivers", async(req, res) =>{
    try {
        const getAllDrivers = await pool.query("SELECT * FROM drivers")
        res.json(getAllDrivers.rows)
    }
    catch (err) {
        console.log(err.message);
    }
})

//GetDriverByID
app.get("/drivers/:id", async(req, res) =>{
    try {
        const {id} = req.params;
        const driver = await pool.query("SELECT * FROM drivers WHERE driver_id = $1", [id])
        res.json(driver.rows[0])
    }
    catch (err) {
        console.log(err.message);
    }
})


//GetAllTeams
app.get("/teams", async(req, res) =>{
    try {
        const getAllTeams = await pool.query("SELECT * FROM teams")
        res.json(getAllTeams.rows)
    }
    catch (err) {
        console.log(err.message);
    }
})

//GetTeamByID


//GetAllCircuits
app.get("/circuits", async(req, res) =>{
    try {
        const GetAllCircuits = await pool.query("SELECT * FROM circuits")
        res.json(GetAllCircuits.rows)
    }
    catch (err) {
        console.log(err.message);
    }
})

//GetCircuitByID


app.listen(8080, () => {
    console.log("Server has Started on port 8080");
})

//GetAllWinners
app.get("/winners", async(req, res) =>{
    try {
        const GetAllWinners = await pool.query("SELECT * FROM winners")
        res.json(GetAllWinners.rows)
    }
    catch (err) {
        console.log(err.message);
    }
})
