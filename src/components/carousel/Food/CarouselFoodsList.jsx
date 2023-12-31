import React, { useEffect, useState } from 'react'
import CarouselFood from './CarouselFood'
import Slider from 'react-slick';
import './nav.css'

const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 7,
        slidesToScroll: 2,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true,
                arrows: false,

              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 2,
                initialSlide: 2,   
                 arrows: false,

              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,

              }
            }
          ]
  };

const CarouselFoodsList = () => {
    const [food,setFood] = useState(null)
    

    useEffect(()=>{
        getFoodData()
    },[])

   async function getFoodData(){
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
    const json = await data.json()
    setFood(json?.data?.cards[1]?.card?.card?.imageGridCards?.info)
    }

  return !food ? " " :(
    <>
    <h1 className='text-lg md:text-2xl font-bold text-gray-800 mt-10  '>What's on your mind?</h1>
        <Slider style={{mixBlendMode:'multiply'}} className='mb-6 h-44 pt-8  ' {...settings}>
        {
            food.map((item)=>{
                return (
                    <CarouselFood data={item} key={item?.id}/>
                )
            })
        }
        </Slider>
    </>
  )
}

export default CarouselFoodsList