import React, { useState } from 'react'
import { ERROR_IMG } from '../../constant/constant'
import { Button } from '@mui/material'

const IMG_URL1="https://mothergooseclub.com/wp-content/uploads/2018/12/Vegetable-Food-Face-e1544742595717.png"
const IMG_URL2="https://www.fyp365.com/wp-content/uploads/2019/01/Donuts-sad-face-400x267-1.png"


const OfflinePage = () => {
    const images = [ERROR_IMG,IMG_URL1,IMG_URL2]
    const [changeImageIndex,setChangeImageIndex] = useState(0)
    const handleChange =()=>{
        setChangeImageIndex((prevIndex)=>(prevIndex+1)%images.length)
    }
  return (
    <div style={{height:'90vh',width:'100vw'}} className='flex flex-col gap-1 text-gray-700 justify-center items-center'>
        <img className='h-96' style={{mixBlendMode:'multiply'}} src={images[changeImageIndex]} alt="" />
        <div className='text-xl font-semibold'>OOPS!</div>
        <div className='text-xl font-semibold'>NO INTERNET</div>
        <div className='text-sm mb-2'>Please check your network connection.</div>
        <Button variant="outlined" style={{color:'gray',borderColor:'gray'}} onClick={handleChange}>TRY AGAIN</Button>
    </div>
  )
}

export default OfflinePage