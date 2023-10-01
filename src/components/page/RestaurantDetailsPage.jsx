import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { IMG_URL } from '../../constant/constant';

const RestaurantDetailsPage =() => { 
    const  navigate  = useNavigate();
    const {id} = useParams();
    const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940499&lng=85.1376051&restaurantId=${id}`);
    const json = await data.json()
    .catch(err => {
        return console.log(err);
     });
    // console.log(json.data);
    setRestauraunt(json.data);
  }
//   console.log(restaurant?.cards[0]?.card?.card?.info)
    const {cloudinaryImageId} = restaurant?.cards[0]?.card?.card?.info
    return (
        <div>
            <img src={IMG_URL+cloudinaryImageId} alt="img" />
            {/* <h1>{name}</h1> */}
            {/* {console.log(restaurant)} */}
        </div>
)
}

export default RestaurantDetailsPage