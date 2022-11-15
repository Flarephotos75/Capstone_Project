import { Link } from 'react-router-dom'
import React from 'react'
import F1Logo from '../img/LongF1Logo.jpg'
import "../static/style.css"


const NavBar = () => {
  return (
    <div className='bg-white'>
        <section>
        <Link to='/home' className='nav-link'>
            <span className='sr-only'>FLARE-F1</span>
            <img
              className='smallf1logo'
              src={F1Logo}
              alt=''
            />
          </Link>
        </section>
      <header>
        <div className='header-container'>
          <nav>
            <ul className='main-nav'>
              <li className='nav-item'>
                <Link to='/home' className='nav-link'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/drivers' className='nav-link'>
                  Drivers
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/teams' className='nav-link'>
                  Teams
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/circuits' className='nav-link'>
                  Tracks
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/raceresults' className='nav-link'>
                  Race Results
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/car' className='nav-link'>
                  Car Details
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </div>
  )
}

export default NavBar
