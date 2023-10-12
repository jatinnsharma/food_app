import React from 'react'
import CategoryList from './CategoryList'
import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import {MdKeyboardArrowDown} from 'react-icons/md'

const RestaurantMenu = (items) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const { itemCards, title } = items?.card?.card;  
  return (
    <Accordion  expanded={expanded === 'panel'} onChange={handleChange('panel')}>
    <AccordionSummary
      expandIcon={<MdKeyboardArrowDown/>}
      aria-controls="panel1bh-content"
      id="panel1bh-header"
    >
      <Typography  sx={{ width: '33%', flexShrink: 0 }}>
        <div className='font-semibold text-gray-600 text-xs md:text-base'>{title} ({itemCards.length})</div>
      
      </Typography>
    </AccordionSummary>
    
      {
        <CategoryList itemCards={itemCards} />
      }
    
  </Accordion>
  )
}

export default RestaurantMenu