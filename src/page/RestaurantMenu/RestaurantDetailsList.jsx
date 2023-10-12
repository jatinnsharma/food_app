import React, { Suspense, useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { IMG_URL } from "../../constant/constant";
import RestaurantMenu from "./RestaurantMenu";
import RestaurantMenuShimmmer from "../../Shimmer/RestaurantMenuShimmer";
import { IoChevronBackCircleOutline } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { Divider } from "@mui/material";
import {BiSolidTimeFive} from 'react-icons/bi'
import {HiMiniCurrencyRupee} from 'react-icons/hi2'
import {CiPercent} from 'react-icons/ci'
import useGetRestaurantsDetails from "../../utils/useGetRestaurantsDetails";
import { BsFillCartFill } from "react-icons/bs";
import { useSelector } from "react-redux";
import {FiSearch} from 'react-icons/fi'


const RestaurantDetailsList = () => {
  const cartItems = useSelector((store) => store.cart.items);

  const navigate = useNavigate();
  const { id } = useParams();

  const restaurant = useGetRestaurantsDetails(id)

  // const [showIndex, setShowIndex] = useState(0);  
  
  if (restaurant === null) { 
    return <RestaurantMenuShimmmer />;
  }



  const categories =
  restaurant?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    (category) =>
      category.card?.["card"]?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  
    // const categories = restaurant?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards

  // get data from api 
  const { name, city, areaName, cuisines, avgRating, totalRatingsString,costForTwoMessage } =
    restaurant?.cards[0]?.card?.card?.info;

const {lastMileTravelString} = restaurant?.cards[0]?.card?.card?.info?.sla;


  return (
    <div className="w-8/12 m-auto mt-5">
      <div className="flex items-center justify-between">
        <div className=" text-xs md:text-base flex items-center gap-1 ">
          <IoChevronBackCircleOutline
            onClick={() => navigate(-1)}
            style={{ color: "orangered", fontSize: "20px", cursor: "pointer" }}
          />{" "}
          Home / {city} / {areaName}
        </div>

        <Link className="flex items-center gap-1 " to={'/search-page'}><FiSearch className="text-orange-500"/>Search</Link>
      </div>
      <div className="flex justify-between mt-4 ">
        <div className="text-xl md:text-3xl font-bold">{name}</div>
      </div>
      <div className="flex justify-between">
      <div className="text-gray-400 font-semibold text-sm md:text-base">
        <div>{cuisines.join(", ")}</div>
        <div className="flex gap-2 text-xs md:text-sm">
          <div>{areaName} |</div>
          <div>{city}</div>
        </div>
      </div>
      <div className="bg-white h-20 w-24 flex justify-center drop-shadow-xl flex-col items-center relative divide-y  rounded-lg	" style={{top:'-2rem',left:'1rem'}}>
        <h6 className="flex flex-row items-center gap-1 mb-2">
          <AiFillStar style={{color:'green',fontSize:'1.5rem'}} /> {avgRating}
        </h6>
        <h6 className="mt-1 text-sm">{totalRatingsString}</h6>
      </div>
      </div>
      <Divider/>
      <div className="mt-3 font-semibold  md:text-xl flex items-center gap-2
      ">
         <BiSolidTimeFive  /> {lastMileTravelString}  |  <HiMiniCurrencyRupee  /> {costForTwoMessage}
      </div>

      <div className="grid md:grid-cols-4 text-gray-500 bg-white rounded-lg my-12 drop-shadow-xl	border justify-center items-center text-center">
                <div className="border px-16 md:px-0">
                  <h6 className="flex items-center justify-center gap-1 ">
                    <CiPercent /> 
                    <div className="font-bold">Flat 10% off upto 120</div>
                  </h6>
                  <h6 className="use-off">USE PARTY I ABOVE Rs.130</h6>
                </div>
                <div className="border">
                  <h6 className="font-bold">Flat 10% off upto 120</h6>
                  <h6 className="use-off">USE PARTY I ABOVE Rs.130</h6>
                </div>
                <div className="border">
                  <h6 className="font-bold">Flat 10% off upto 120</h6>
                  <h6 className="use-off">USE PARTY I ABOVE Rs.130</h6>
                </div>
                <div className="border">
                  <h6 className="font-bold">Flat 10% off upto 120</h6>
                  <h6 className="use-off">USE PARTY I ABOVE Rs.130</h6>
                </div>
              </div>
             
      {
        categories.map((items)=>{
         return (
          <RestaurantMenu {...items} key={items?.card?.card?.title}/>
         ) 
        })
      }
      {cartItems?.length > 0 && (
            <div className="flex justify-between fixed bottom-9 right-3 mb-12 mr-10">
              <span className="px-5 py-2 text-sm font-bold tracking-wide text-white rounded-full focus:outline-none"></span>
              <Link to="/cart">
                 
                <button className="flex items-center px-4 py-2 text-sm font-bold tracking-wide text-white bg-orange-500 rounded-full">
                  <BsFillCartFill style={{fontSize:"1.2rem",paddingRight:"5px"}}/> Cart - {''}
                  {cartItems.length}
                </button> 
              </Link>
            </div>
          )}
    </div>
  );
};

export default RestaurantDetailsList;
