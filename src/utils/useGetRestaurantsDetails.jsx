import { useEffect, useState } from 'react'
import { RESTAURANT_ID_DETAILS } from '../constant/constant';
const useGetRestaurantsDetails = (id) => {
    const [restaurant, setRestauraunt] = useState(null);

    useEffect(() => {
      getRestaurantInfo();
    }, []);
  
    async function getRestaurantInfo() {
      const data = await fetch(RESTAURANT_ID_DETAILS+id);
      const json = await data.json();
      // console.log(json?.data);
      setRestauraunt(json?.data?.cards[0].card?.card);
    }
    return restaurant
}

export default useGetRestaurantsDetails