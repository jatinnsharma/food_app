import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';





function filterData(searchText, restaurants) {
  const filterData = restaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}



const RestaurantList = () => {

const [restaurants,setRestaurants] = useState([]);
const [searchTerm,setSearchTerm] = useState("");

useEffect(()=>{
 getRestaurant();
},[]);

async function  getRestaurant(){
 const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
 const json = await data.json();
 setRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

  return (
    <>
    <div className=' text-3xl ml-28 p-10'>Restaurants with online food delivery in Chandigarh</div>
    

    {/* search functionality */}
    <input type="text" placeholder='Search for restaurants and food' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
    <button onClick={()=>{
      const data = filterData(searchTerm,restaurants)
      setRestaurants(data)
      console.log(data)
    }}>Search</button>
    <div className='grid grid-cols-4 place-items-center m-auto gap-5 w-10/12'>
      {
        restaurants.map((items)=>{
          return (
            <RestaurantCard data={items} />
          )
        })
      }
    </div>
    </>
  )
}

export default RestaurantList