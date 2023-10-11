import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const EmptyCart = () => {
  return (
      <div style={{width:'100vw',height:'76.6vh'}} className="flex justify-center items-center flex-col gap-4 ">
        <img
          height="300"
          width="300"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/2xempty_cart_yfxml0"
          alt="cartimg"
        />
        <h5 className="">
          Your cart is empty
        </h5>
        <p style={{ fontSize: "12px", fontWeight: "bold", color: "gray" }}>
          You can go to home page to view more restaurants
        </p>
        <Link to="/">
          <Button
            type=""
            className=""
            style={{ backgroundColor: "orangered", color: "white" }}
          >
            SEE RESTAURANTS NEAR YOU
          </Button>
        </Link>
      </div>
  );
};
export default EmptyCart;