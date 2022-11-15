const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");
const { default: SearchBar } = require('../flare-f1/src/components/SearchBar');

// middleware
app.use(cors());
app.use(express.json());

// Serve Images
app.use(express.static('static'));

//Routes

//GetTop5Drivers
app.get("/", async(req, res) =>{
    try {
        const getTop5Drivers = await pool.query("SELECT * FROM drivers WHERE position GROUP BY position ORDER BY position")
        res.json(getTop5Drivers.rows)
        
    }
    catch (err) {
        console.log(err.message);
    }
})

//GetAllDrivers
app.get("/drivers", async(req, res) =>{
    try {
        const getAllDrivers = await pool.query("SELECT * FROM drivers ORDER BY position ASC")
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
        const getAllTeams = await pool.query("SELECT * FROM teams ORDER BY position ASC")
        res.json(getAllTeams.rows)
    }
    catch (err) {
        console.log(err.message);
    }
})

//GetTeamByID
app.get("/teams:id", async(req, res) =>{
    try {
        const team = await pool.query("SELECT * FROM teams WHERE team_id = $1", [id])
        res.json(getAllTeams.rows)
    }
    catch (err) {
        console.log(err.message);
    }
})

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
app.get("/circuits/:id", async(req, res) =>{
    try {
        const circuit = await pool.query("SELECT * FROM circuits WHERE circuit_id = $1", [_id])
        res.json(GetAllCircuits.rows)
    }
    catch (err) {
        console.log(err.message);
    }
})


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

// Get Winner by Driver ID
app.get("/winners/:id", async(req, res) =>{
    try {
        const GetAllWinners = await pool.query("SELECT * FROM winners")
        res.json(GetAllWinners.rows)
    }
    catch (err) {
        console.log(err.message);
    }
})

// Get Qualy Details
app.get("/qualy", async(req, res) =>{
    try {
        const getAllQualy = await pool.query("SELECT * FROM qualifying")
        res.json(getAllQualy.rows)
    }
    catch (err) {
        console.log(err.message);
    }
})

// Get Race Results Details
app.get("/raceresults", async(req, res) =>{
    try {
        const getAllRaceResults = await pool.query("SELECT * FROM raceresults ORDER BY id ASC")
        res.json(getAllRaceResults.rows)
    }
    catch (err) {
        console.log(err.message);
    }
})

// Show Car Detail
app.get("/car", async(req, res) => {
})

// Search Function
// app.get("/search", async(req, res)  => {
// })

