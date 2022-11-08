import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';



export default function ControlledAccordions({team}) {
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
          {team.name}
          </Typography>
        </AccordionSummary>
        <AccordionDetails> 
          <p>POSITION</p><Typography sx={{ color: 'text.secondary', width: '30%' }}>{team.position}</Typography>
          <p>POINTS</p><Typography sx={{ width: '15%', align: 'right' }}>{team.points}</Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
