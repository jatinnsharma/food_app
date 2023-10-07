import React, { useEffect, useState } from 'react'
import CarouselRestaurant from './CarouselRestaurant';
import Slider from 'react-slick';

const settings = {
  infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
};

const CarouselRestaurantsList = () => {
  const [restaurantChains,setRestaurauntChains] = useState([])

  useEffect(()=>{
    getData();
  },[])

  async function getData(){
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json();
    setRestaurauntChains(json.data.cards[0].card.card.imageGridCards.info)
  }
  return (restaurantChains.length < 3 )? " " :  (
    <>
    <div className=' text-2xl font-bold text-gray-800 mt-10 mb-6'>Best offers for you</div>
    <Slider className='mb-16' style={{mixBlendMode:'multiply'}}  {...settings}>    {
        restaurantChains.map((item)=>{
          return(
            <CarouselRestaurant data={item} key={item.id} />
          )
        })
      }
      </Slider>
    </>
  )
}

export default CarouselRestaurantsList