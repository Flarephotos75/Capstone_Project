import { useState, useEffect } from 'react'
import TracksService from '../services/TracksService'
import React from 'react';
import AllCircuitsCard from '../components/AllCiruitsCard';

const TracksContainer = () => {

    const [tracksList, setTracksList] = useState([])

    useEffect(() => {
        TracksService.getAllTracks()
        .then((allTracks) => {
          setTracksList(allTracks)
        })
      }, [])

      return (
    <div className='stacked-group'>
      <div className='stacked-list'>
      <h4 className='stacked-group-title'>Track Information </h4>
      <ul role='list' className='dash-list'>
      <AllCircuitsCard key={tracksList.id} listOfTracks={tracksList} />
      </ul>
    </div>
</div>
      )
}

export default TracksContainer;