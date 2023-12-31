import { Box, Skeleton } from '@mui/material'
import React from 'react'

const RestaurantShimmer = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 w-11/12 m-auto gap-5 items-center justify-center mt-10' >
      
        {
            Array(20).fill(" ").map((e,index)=>{
                return (
                    <div key={index} >
                    <Skeleton variant="rectangular" className='text-[10rem]'/>
                    <Skeleton width="73%" />
                    <Skeleton width="50%" />
                    </div>
                )
            })
        }
    </div>
    
  )
}

export default RestaurantShimmer