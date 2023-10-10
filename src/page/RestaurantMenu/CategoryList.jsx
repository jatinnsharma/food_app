import { AccordionDetails, Alert, Button, Snackbar } from "@mui/material";
import React from "react";
import { MENU_ITEM_IMG } from "../../constant/constant";
import { FaDotCircle } from "react-icons/fa";
import { AiFillStar } from "react-icons/ai";
const CategoryList = (itemCards) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <AccordionDetails>
      {itemCards?.itemCards?.map((items) => {
        const { vegClassifier } = items?.card?.info?.itemAttribute;
        const { name, category, imageId, price } = items?.card?.info;
        const { text } = items?.card?.info?.ribbon;

        return (
          <div className="flex justify-between ">
            <div>
              <div className="flex gap-2">
                {vegClassifier === "VEG" ? 
                <div className="flex items-center gap-2"> <img className="h-5 w-5" src="/images/vegetarian.png" alt="veg-icon" /> <span className="text-green-600 text-sm font-semibold">VEG</span>  </div>: <div className="flex items-center gap-2"><img className="h-5 w-5" src="/images/non-veg.png" alt="nonVeg-icon" /> <span className="text-red-600 text-sm font-semibold">NON-VEG</span></div> }
                <span className="">
                      {text ? (
                        <span className="flex items-center gap-1" style={{ color: "orange" }}>
                          <AiFillStar /> Bestseller
                        </span>
                      ) : (
                        ""
                      )}
                    </span>
              </div>
              <div className="text-lg font-semibold">{name}</div>
              <div className="text-sm text-gray-500 font-bold">{category}</div>
              <div className="text-gray-500 font-semibold">
                ₹ {price?.toString()?.slice(0, -2)}
              </div>
            </div>

            <div className="flex items-center flex-col">
              <img
                className="h-24 w-24 rounded-lg"
                src={MENU_ITEM_IMG + imageId}
                alt="menu-item"
              />
              <Button
                variant="outlined"
                onClick={handleClick}
                style={{
                  backgroundColor: "white",
                  color: "green",
                  border: "green",
                }}
                className="relative bottom-6"
              >
                ADD
              </Button>

              <Snackbar
                open={open}
                autoHideDuration={6000}
                onClose={handleClose}
              >
                <Alert
                  onClose={handleClose}
                  severity="success"
                  sx={{ width: "100%" }}
                >
                  Add to Card!
                </Alert>
              </Snackbar>
            </div>
          </div>
        );
      })}
    </AccordionDetails>
  );
};

export default CategoryList;
