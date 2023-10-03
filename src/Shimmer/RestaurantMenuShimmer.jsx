import { CircularProgress, Skeleton } from '@mui/material'
import React from 'react'

const RestaurantMenuShimmmer = () => {
  return (
    <div style={{height:'79vh'}} className='w-11/12 m-auto '>

   <Skeleton className='ml-72' width="60%" />
    <div className='flex gap-8 items-center justify-center mt-10' >

    {
      Array(2).fill(" ").map((e,index)=>{
        return (
          <div key={index} >
                 
                <Skeleton variant="rectangular" width={350} height={250} />
                <Skeleton width="43%" />
                <Skeleton width="29%" />
                </div>
            )
        })
    }
</div>
    </div>
  )
}

export default RestaurantMenuShimmmer