import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import HomeContainer from './containers/HomeContainer';
import { useState, useEffect } from 'react'
import React from 'react';
import "./static/style.css"
import TeamsContainer from './containers/TeamsContainer';
import DriversContainer from './containers/DriversContainer'
import CircuitContainer from './containers/CircuitContainer'

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
          <Route path='/drivers/' element={<DriversContainer/>} />
          {/* <Route path='/drivers/:id/' element={<HomeCard />} /> */}

          {/* CAR ROUTE */}
          {/* <Route path='/car' element={<CarCard />} /> */}

           {/* TEAMS ROUTES */}
           <Route path='/teams/' element={<TeamsContainer />} />
          {/* <Route path='/teams/:id/' element={<TeamDetail />} /> */}

           {/* CIRCUITS ROUTES */}
           <Route path='/circuits/' element={<CircuitContainer />} />
          {/* <Route path='/circuit/:id/' element={<CircuitDetail />} /> */}

        </Routes>
      </Router>
      <footer>
      </footer>
    </main>
  );
}

export default App;
