import React from 'react'
import { BANNER_URL } from '../../../constant/constant';


const CarouselFood = (props) => {
 
  const {imageId} = props?.data
  return (
  <div className='flex justify-center items-center'>
   <img className='h-28 md:h-36 ' src={BANNER_URL+imageId}  alt="banner_img" 
   />
  </div>
  )
}

export default CarouselFood