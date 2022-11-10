import React from 'react'

const AllCircuitsCard = ({ listOfTracks }) => {

    const trackData = listOfTracks.map((track) => {
        return (
            <>
                <p className='bold'>{track.name}</p>
                <img src={"http://localhost:8080" + track.image_path} width="200" height="144"/>
                <table>
                    <tbody>
                        <th>Grand Prix Name</th>
                        <th>Track Name</th> 
                        <th>Track Type</th> 
                        <th>Track Length</th> 
                        <th>Track Direction</th> 

                        
                        <tr><td>{track.name}</td>
                        <td> {track.track}</td>
                        <td>{track.type}</td>
                        <td>{track.length}</td>
                        <td>{track.direction}</td>

                        
                        </tr>

                    </tbody>
                </table>
                <hr />
            </>
    )
})

return (
    <>
    <ul role= 'list' className = 'dash-list' >
        { trackData }
        </ul>
        </>
  )

}

export default AllCircuitsCard
