import React from "react";
import { Divider } from "@mui/material";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CarouselRestaurantsList from '../components/carousel/Restaurants/CarouselRestaurantsList'
import CarouselFoodsList from '../components/carousel/Food/CarouselFoodsList'
import RestaurantList from "../components/Cards/RestaurantList";

const Home = () => {
  return (
    <>
      <CarouselRestaurantsList />
    <div className="w-10/12 m-auto ">
        <Divider />
      <CarouselFoodsList />
        <Divider />
      <RestaurantList />
    </div>
    </>
  );
};

export default Home;
