import React from 'react'
import Header from '../Header/Header'
import RestaurantList from '../Cards/RestaurantList'
import CarouselFoodsList from '../carousel/Food/CarouselFoodsList'
import { Divider } from '@mui/material'
import CarouselRestaurantsList from '../carousel/Restaurants/CarouselRestaurantsList'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  return (
    <div>
      <CarouselFoodsList/>
<div className='w-10/12 m-auto my-8'>

      <Divider  />
</div>
<CarouselRestaurantsList/>
<div className='w-10/12 m-auto my-8'>

      <Divider  />
</div>
        <RestaurantList/>
    </div>
  )
}

export default Home