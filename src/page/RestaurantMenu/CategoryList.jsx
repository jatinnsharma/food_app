import { AccordionDetails } from '@mui/material'
import React from 'react'
import { MENU_ITEM_IMG, RESTAURANT_ID_DETAILS } from '../../constant/constant'

const CategoryList = (itemCards) => {
  console.log(itemCards)
  return (
    <AccordionDetails>
      {
        itemCards?.itemCards?.map((items)=>{
          const { vegClassifier } = items?.card?.info?.itemAttribute;
          const {name,category,imageId,price} = items?.card?.info;
          
          return(
            <div className='flex justify-between p-4'>
              <div>
              <div className='text-xl font-semibold'>{name}</div>
              <div className='text-sm text-gray-500'>{category}</div>
              <div className='text-gray-500'>₹ {price.toString().slice(0,-2)}</div>
              </div>

              <div className='flex items-center flex-col'>

              <img className='h-24 rounded-lg' src={MENU_ITEM_IMG+imageId} alt="res" />
              <button className='bg-white text-green-500 py-2 px-4 border relative bottom-6'>ADD</button>
              </div>
            </div>
          )
        })
      }
     </AccordionDetails>  )
}

export default CategoryList