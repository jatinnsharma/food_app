import React, { useEffect, useState } from 'react'
import {FiSearch} from 'react-icons/fi'
import SearchCarousel from './SearchCarousel'
import Slider from 'react-slick';
import SearchCarouselShimmmer from '../../Shimmer/SearchCarouselShimmer';
const settings = {
    speed: 500,
    slidesToShow: 10,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
};
const SearchPage = () => {
  const [carouselData, setCarouselData] = useState(null)

  useEffect(()=>{
    getData();
  },[])

  async function getData(){
      const data = await fetch('https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=30.7104586&lng=76.7033471') 
      const json = await data.json();
      setCarouselData(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
  }

  return !carouselData ? <SearchCarouselShimmmer/> : (
    <div style={{height:'71.2vh'}} className='w-8/12 m-auto mt-10'>
        <input type="text"  placeholder='Search for restaurants and food' className='w-full h-12 drop-shadow-xl pl-4 focus-visible:outline-none'/> 
        <FiSearch className='text-xl text-gray-500 relative bottom-8 left-[18rem] sm:left-[25rem] md:left-[40rem] lg:left-[45rem] xl:left-[60rem]' />

    
        <Slider style={{mixBlendMode:'multiply'}} className=' h-32  pt-2  ' {...settings}>
        {
          carouselData.map((items)=>{
            return(
              <SearchCarousel data={items} key={items.id} />
            )
          })
        }
       </Slider>
    </div>
  )
}

export default SearchPage