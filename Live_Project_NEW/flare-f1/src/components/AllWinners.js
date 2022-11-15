import React from 'react'
import Accordian from './WinnersAccordian'

const AllWinners = ({ winners }) => {

        const winnerData = winners.map((winner) => {
            return (
            <>       
                <img className='smallteamlogo' src={"http://localhost:8080" + winner.driver_image_path} width="200" height="144"/>
                <li><Accordian key={winner.id} winner={winner}></Accordian></li>
            </>
            )
        })

return (
    <>
        <ul role= 'list' className = 'dash-list' >
        { winnerData }
        </ul>
    </>
  )

}

export default AllWinners;
