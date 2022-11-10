import { useState, useEffect } from 'react'
import React from 'react';
import QualyService from '../services/QualyService';
import QualyChart from '../components/QualyChart';

const QualyContainer = () => {

    const [qualyList, setQualyList] = useState([])

    useEffect(() => {
        QualyService.getAllQualy()
        .then((allQualy) => {
            setQualyList(allQualy)
        })
      }, [])

      return (
    <div className='stacked-group'>
      <div className='stacked-list'>
      <h4 className='stacked-group-title'>Qualification Information </h4>
      <ul role='list' className='dash-list'>
      <QualyChart key={qualyList._id} qualyItems={qualyList} />
      </ul>
    </div>
</div>
      )
}

export default QualyContainer;