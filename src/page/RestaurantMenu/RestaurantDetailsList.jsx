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

const RestaurantDetailsList = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [restaurant, setRestauraunt] = useState(null);

  useEffect(() => {
    getRestaurantInfo();
  }, []);

  async function getRestaurantInfo() {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.5940499&lng=85.1376051&restaurantId=${id}`
    );
    const json = await data.json();
    // console.log(json?.data);
    setRestauraunt(json?.data?.cards[0].card?.card);
  }
  if (restaurant === null) { 
    return <RestaurantMenuShimmmer />;
  }
  const { name, city, areaName, cuisines, avgRating, totalRatingsString,costForTwoMessage } =
    restaurant?.info;
const {lastMileTravelString} = restaurant?.info.sla;
  return (
    <div className="w-8/12 m-auto mt-5">
      <div className="flex items-center justify-between">
        <div className="flex  items-center gap-1">
          <IoChevronBackCircleOutline
            onClick={() => navigate(-1)}
            style={{ color: "orangered", fontSize: "20px", cursor: "pointer" }}
          />{" "}
          Home / {city} / {areaName}
        </div>
        <div>

        <Link to={'/search-page'}>Search bar</Link>
        </div>
      </div>
      <div className="flex justify-between mt-4 ">
        <div className="text-3xl font-bold">{name}</div>
      </div>
      <div className="flex justify-between">
      <div className="text-gray-400 font-semibold">
        <div>{cuisines.join(", ")}</div>
        <div className="flex gap-2 text-sm">
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
      <div className="mt-3 font-semibold text-xl flex items-center gap-2
      ">
         <BiSolidTimeFive style={{ fontSize: "20px" }} /> {lastMileTravelString}  |  <HiMiniCurrencyRupee style={{ fontSize: "20px" }} /> {costForTwoMessage}
      </div>

      <div className="grid grid-cols-4 text-gray-500 bg-white rounded-lg mt-8 drop-shadow-xl		border justify-center items-center text-center">
                <div className="">
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
             
              
      {Object.values(restaurant).map((items, index) => {
        return (
            <RestaurantMenu data={items} key={index} />
            )
          })}
    </div>
  );
};

export default RestaurantDetailsList;
