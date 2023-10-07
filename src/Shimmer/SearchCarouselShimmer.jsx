import { Skeleton } from "@mui/material";
import React from "react";
import RestaurantMenuShimmmer from "./RestaurantMenuShimmer";

const SearchCarouselShimmmer = () => {
  return (
    <div className=" w-10/12 m-auto justify-center items-center flex flex-col  mt-12">
      <Skeleton variant="rectangular" width="80%" height={50} />
      <div className="my-6 flex gap-8">
        {Array(10)
          .fill("")
          .map(() => (
            <Skeleton variant="circular" width={74} height={74} />
          ))}
      </div>

      {Array(10)
        .fill("")
        .map(() => (
          <Skeleton
            variant="rectangular"
            width="80%"
            height={130}
            style={{ marginBottom: "20px" }}
          />
        ))}
    </div>
  );
};

export default SearchCarouselShimmmer;
