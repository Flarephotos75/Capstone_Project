import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';



export default function ControlledAccordions({races}) {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };


  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          aria-controls="panel1bh-content"
          id="panel1bh-header">
          <Typography sx={{ width: '30%', flexShrink: 0 }}>
          <p className='bold'>{races.track} {races.position}</p>
          </Typography>
         
        </AccordionSummary>
        <AccordionDetails> 
          <table className='races'>
            <tbody>
            <tr>
              <th>DRIVER</th>
              <th>TEAM</th>
              <th>FINISHING POSITION</th>
              <th>POINTS</th>
              <th>QUALIFICATION POSITION</th>
              <th>HAD FASTEST LAP</th>


            </tr>
              <tr className='race'>
                <td><img src={"http://localhost:8080" + races.image_path} width="83" height="83"/></td>
                <td><Typography sx={{ width: '100%', align: 'left' }}>{races.team_name}</Typography></td>
                <td><Typography sx={{ width: '100%', align: 'left' }}>{races.position}</Typography></td>
                <td><Typography sx={{ width: '100%', align: 'left' }}>{races.points}</Typography></td>
                <td><Typography sx={{ width: '100%', align: 'left' }}>{races.starting_grid}</Typography></td>
                <td><Typography sx={{ width: '100%', align: 'left' }}>{races.fastest_lap}</Typography></td>


              </tr>
            </tbody>
          </table>
                 
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
