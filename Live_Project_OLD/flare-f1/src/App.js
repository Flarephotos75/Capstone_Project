import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';
import LandingPage from './containers/LandingPage';
import DriversContainer from './containers/DriversContainer'
import { useState, useEffect } from 'react'
import DriverService from './services/DriverService'
import DriverDetailCard from './components/DriverDetailCard';
import React from 'react';
import F1Logo from './img/F1Logo.jpg'
import "./static/style.css"
import DriversHomeCard from './components/DriversHomeCard';

function App() {

  const [drivers, setDrivers] = useState([])

  // useEffect(() => {
  //   DriverService.getAllDrivers()
  //   .then((drivers) => setDrivers(drivers))
  // }, [])

  return (
    <main>
      <Router>
        <NavBar />
        <Routes>
          {/* LANDING PAGE */}
          <Route path='/home' element={<HomeContainer />} />
          {/* HOME ROUTE */}
          {/* <Route path='/home' element={<HomeContainer/>} /> */}

          {/* DRIVERS ROUTES */}
          <Route path='/drivers/' element={<DriversContainer drivers={drivers} />} />
          <Route path='/drivers/:id/' element={<DriversHomeCard />} />

           {/* TEAMS ROUTES */}
           {/* <Route path='/teams/' element={<TeamsContainer teams={teams} />} />
          <Route path='/teams/:id/' element={<TeamDetail />} /> */}

           {/* CIRCUITS ROUTES */}
           {/* <Route path='/circuit/' element={<CircuitContainer circuits={circuits} />} />
          <Route path='/circuit/:id/' element={<CircuitDetail />} /> */}

        </Routes>
      </Router>
      <footer>
      </footer>
    </main>
  );
}

export default App;
