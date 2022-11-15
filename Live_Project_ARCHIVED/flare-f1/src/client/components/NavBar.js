import { Link } from 'react-router-dom'
import React from 'react'
import F1Logo from '../img/LongF1Logo.jpg'
import "../css/style.css"


const NavBar = () => {
  return (
    <div className='bg-white'>
        <section>
        <Link to='/' className='nav-link'>
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
                <Link to='/' className='nav-link'>
                  Home
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
