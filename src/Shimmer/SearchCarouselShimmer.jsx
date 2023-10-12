import { Skeleton } from "@mui/material";
import React from "react";

const SearchCarouselShimmmer = () => {
  return (
    <div className=" w-10/12 m-auto justify-center items-center flex flex-col  mt-12">
      <Skeleton variant="rectangular" width="80%" height={50} />
      <div className="my-6 flex gap-8">
        {Array(10)
          .fill("")
          .map((e,index) => (
            <Skeleton variant="circular" width={74} height={74}  key={index}/>
          ))}
      </div>

      {Array(3)
        .fill("")
        .map((e,index) => (
          <div key={index}>
          <Skeleton
            variant="rectangular"
            width="80%"
            height={130}
            style={{ marginBottom: "20px" }}
          />
          <Skeleton
            variant="rectangular"
            width="50%"
            height={10}
            style={{ marginBottom: "20px" }}
          />
          </div>
        ))}
    </div>
  );
};

export default SearchCarouselShimmmer;
