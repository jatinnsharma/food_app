import React, { useEffect, useState } from 'react'
import CarouselRestaurant from './CarouselRestaurant';
import Slider from 'react-slick';
import CarouselShimmer from '../../../Shimmer/CarouselShimmer';

const settings = {
  infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
          arrows: false,

        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
          arrows: false,

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
        }
      }
    ]
};

const CarouselRestaurantsList = () => {
  const [restaurantChains,setRestaurauntChains] = useState(null)

  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json();
    setRestaurauntChains(json?.data?.cards[0]?.card?.card?.imageGridCards?.info)
  }

  return !restaurantChains ? (<CarouselShimmer/>): (
    <div className='w-10/12 m-auto'>
    <div className='text-lg md:text-2xl font-bold text-gray-800 mt-10 mb-6'>Best offers for you</div>
    <Slider className='mb-16' style={{mixBlendMode:'multiply'}}  {...settings}>    {
        restaurantChains.map((item)=>{
          return(
            <CarouselRestaurant data={item} key={item?.id} />
          )
        })
      }
      </Slider>
    </div>
  )
}

export default CarouselRestaurantsList