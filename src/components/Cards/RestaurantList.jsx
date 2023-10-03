import React, { useEffect, useState } from 'react'
import RestaurantCard from './RestaurantCard';
import Button from '@mui/material/Button';
import RestaurantShimmer from '../../Shimmer/RestaurantShimmer';




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
 console.log(json.data.cards)
 setAllRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
 setFilteredRestaurants(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
}

// Button filtered
const filteredButton = (selectedButton) =>{
  if(selectedButton==="All"){
    setFilteredRestaurants(allrestaurants)
  }
  if(selectedButton === 'lessThan300'){
   const data = allrestaurants.filter((res)=>res.info.costForTwo < '₹300 for two')
  setFilteredRestaurants(data)
  } 
   if(selectedButton === '300To600'){
    const data = allrestaurants.filter((res)=>(res.info.costForTwo > '₹300 for two' &&  res.info.costForTwo < '₹600 for two'))
    setFilteredRestaurants(data)
  }
  if(selectedButton==="fastDelivery"){
    const data = allrestaurants.filter((res)=>res.info.sla.deliveryTime<=15)
    setFilteredRestaurants(data)
  }
  if(selectedButton==="pureVeg"){
    const data = allrestaurants.filter((res)=>res.info.veg);
    setFilteredRestaurants(data)
  }
}
  
  return !filteredRestaurants? (<RestaurantShimmer/>) :
  (
    <>
    <div className=' text-2xl pt-4 font-bold'>Restaurants with online food delivery in Bangalore</div>
    
    <div className='flex justify-around py-6 '>
      <div className='flex gap-2 mr-32'>
        <Button onClick={()=>{filteredButton('All')}} color='error' variant="outlined" size='small' >All</Button>
        <Button onClick={()=>{filteredButton('fastDelivery')}} color='error' variant="outlined" size='small' >Fast Delivery</Button>
        <Button onClick={()=>{filteredButton("pureVeg")}} color='error' variant="outlined" size='small' >Pure Veg</Button>
        <Button onClick={()=>{filteredButton('300To600')}} color='error' variant="outlined" size='small' >Rs.300-Rs.600</Button>
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

    <div className='grid grid-cols-4 place-items-center gap-5 '>
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