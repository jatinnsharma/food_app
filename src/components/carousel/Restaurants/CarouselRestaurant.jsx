import React from 'react'
import { RES_CHAINS } from '../../../constant/constant';

const CarouselRestaurant = (props) => {
  const {imageId} = props.data
  return (
    <div className='m-3 mb-6'>
      <img src={RES_CHAINS+imageId} alt="restaurantsChains-pic" />
    </div>
  )
}

export default CarouselRestaurant