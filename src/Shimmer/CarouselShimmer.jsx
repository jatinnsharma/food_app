import { CircularProgress } from '@mui/material'
import React from 'react'

const CarouselShimmer = () => {
  return (
    <div style={{height:'47vh',backgroundColor:'#171A29'}}  className='flex flex-col justify-center items-center my-10'>
      <CircularProgress style={{'color': '	#C0C0C0'}} />
        <div className='text-gray-400 text-lg md:text-3xl mt-2'>Looking for Great food near you ...</div>
    </div>
  )
}

export default CarouselShimmer