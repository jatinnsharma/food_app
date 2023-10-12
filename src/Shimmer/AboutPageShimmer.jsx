import { Skeleton } from '@mui/material'
import React from 'react'

const AboutPageShimmer = () => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-4 w-11/12 m-auto gap-5 items-center justify-center mt-10' >
    <Skeleton variant="circular" className='text-[11rem] md:text-[16rem] '/>
    <Skeleton variant="rectangular" className='text-[5rem] md:text-[12rem] md:w-[60rem]'/>
    </div>
  )
}

export default AboutPageShimmer