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

};
const SearchPage = () => {
  const [dataCarousel , setDataCarousel] = useState(null)

  useEffect(()=>{
    getData();
  },[])

  async function getData(){
      const data = await fetch('https://www.swiggy.com/dapi/landing/PRE_SEARCH?lat=30.7104586&lng=76.7033471') 
      const json = await data.json();
      setDataCarousel(json?.data?.cards[1]?.card?.card?.imageGridCards?.info);
  }

  return !dataCarousel ? <SearchCarouselShimmmer/> : (
    <div className='w-8/12 m-auto mt-10'>
        <input type="text"  placeholder='Search for restaurants and food' className='w-full h-12 drop-shadow-xl pl-4 focus-visible:outline-none'/> 
        <FiSearch className='text-xl text-gray-500 relative bottom-8 ' style={{left:'60rem'}}/>

        <Slider style={{mixBlendMode:'multiply'}} className='mb-6 h-44 pt-8  ' {...settings}>

        {
          dataCarousel.map((items)=>{
            return (
              <SearchCarousel data={items} key={items.id}/>
            )
          })
        }
      </Slider>
    </div>
  )
}

export default SearchPage