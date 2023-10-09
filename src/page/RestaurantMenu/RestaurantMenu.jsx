import React from 'react'
import CategoryList from './CategoryList'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';


const RestaurantMenu = (items) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { itemCards, title } = items?.card?.card;  
  return (
    <Accordion className='mt-1' expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
    <AccordionSummary
      expandIcon={'+'}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography  sx={{ width: '33%', flexShrink: 0 }}>
        <div className=''>{title} ({itemCards.length})</div>
      
      </Typography>
    </AccordionSummary>
    
      {
        <CategoryList itemCards={itemCards} />
      }
    
  </Accordion>
  )
}

export default RestaurantMenu