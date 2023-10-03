import { CircularProgress, Skeleton } from '@mui/material'
import React from 'react'

const CarouselShimmer = () => {
  return (
    <div style={{height:'45vh',}} className='bg-indigo-950 flex flex-col justify-center items-center my-10'>
      {/* <CarouselShimmer/> */}
      
        <div className='text-white text-3xl mt-2'>Looking for Great food near you ...</div>
    </div>
  )
}

export default CarouselShimmer