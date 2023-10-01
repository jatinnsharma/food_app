import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import Button from '@mui/material/Button';
import Shimmer from '../../Shimmer/Shimmer';




function filterData(searchText, allrestaurants) {
  const filterData = allrestaurants.filter((restaurant) =>
    restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
  );
  return filterData;
}



const RestaurantList = () => {

const [allrestaurants,setAllRestaurants] = useState(null);
const [filteredRestaurants,setFilteredRestaurants] = useState(null);
const [searchTerm,setSearchTerm] = useState("");

useEffect(()=>{
 getRestaurant();
},[]);


async function  getRestaurant(){
 const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING')
 const json = await data.json();
 setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

// console.log(filteredRestaurants)
// Button 
const filteredButton = (selectedButton) =>{
  // if(selectedButton === 'lessThan300'){
  //   let data  = filteredRestaurants.map((item)=> item.info.costForTwo)
  //   let jatin=  data.filter((price)=> price)
  //   console.log(jatin);
  // }  
}
  
  return !filteredRestaurants? (<Shimmer/>) :
  (
    <>
    <div className=' text-2xl w-10/12 pl-2 m-auto pt-4  '>Restaurants with online food delivery in Chandigarh</div>
    
    <div className='flex justify-around py-6 w-11/12  m-auto'>
      <div className='flex gap-2 pr-10'>
        <Button onClick={()=>{filteredButton('fast delivery')}} color='error' variant="outlined" size='small' >Fast Delivery</Button>
        <Button onClick={()=>{filteredButton()}} color='error' variant="outlined" size='small' >Pure Veg</Button>
        <Button onClick={()=>{filteredButton()}} color='error' variant="outlined" size='small' >Offers</Button>
        <Button onClick={()=>{filteredButton()}} color='error' variant="outlined" size='small' >Rs.300-Rs.600</Button>
        <Button onClick={()=>{filteredButton('lessThan300')}} color='error' variant="outlined" size='small' >Less than Rs.300</Button>
      </div>

    <div className='flex gap-2'>
    {/* search functionality */}
    <input style={{height:'2.2rem',width:'25rem'}} className='pl-3' type="text" placeholder='Search for restaurants and food...' value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}} />
    <Button style={{height:'2.1rem'}} color='error' variant="outlined" size='small' onClick={()=>{
      const data = filterData(searchTerm,allrestaurants)
      setFilteredRestaurants(data)
    }}>Search</Button>
    </div>
    </div>

    <div className='grid grid-cols-4 place-items-center m-auto gap-5 w-10/12'>
      {
        filteredRestaurants.map((items)=>{
          return (
            <RestaurantCard data={items} key={items.id}/>
          )
        })
      }
    </div>
    </>
  )
}


export default RestaurantList