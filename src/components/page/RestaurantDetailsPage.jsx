import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IMG_URL } from '../../constant/constant';
import Shimmer from '../../Shimmer/Shimmer';

const RestaurantDetailsPage =() => { 
  const  navigate  = useNavigate();
  const {id} = useParams();
  const [restaurant, setRestauraunt] = useState([]);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940499&lng=85.1376051&restaurantId=${id}`);
    const json = await data.json() 
    setRestauraunt(json.data.cards[0].card.card.info);
    // setRestauraunt(json);
  }   
  // console.log(restaurant);
  const {cloudinaryImageId} = restaurant


// const {cloudinaryImageId} = 
    // console.log(cloudinaryImageId)
    return  (
        <div>
            <img className='h-96 w-96' src={IMG_URL+cloudinaryImageId} alt="img" />
        </div>
)
}

export default RestaurantDetailsPage