import React from 'react'
import { RES_CHAINS } from '../../../constant/constant';

const CarouselRestaurant = (props) => {
  const {imageId} = props.data
  return (
      <img  src={RES_CHAINS+imageId} alt="restaurantsChains-pic" />
  )
}

export default CarouselRestaurant