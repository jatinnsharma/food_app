import { AccordionDetails, Alert, Button, Snackbar } from "@mui/material";
import React from "react";
import { MENU_ITEM_IMG } from "../../constant/constant";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addItem } from "../../redux/features/cartSlice";



const CategoryList = (itemCards) => {
  const dispatch = useDispatch()
  
  const addItems = (items) =>{
    dispatch(addItem(items))
    handleClick()
  }
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
          <div className="flex justify-between mb-12 md:mb-6" key={items?.card?.info?.id}>
            <div>
              <div className="flex gap-2">
                {vegClassifier === "VEG" ? 
                <div className="flex items-center gap-2"> <img className="h-3 w-3 md:h-5 md:w-5" src="/images/vegetarian.png" alt="veg-icon" /> <span className="text-green-600 text-xs md:text-sm font-semibold">VEG</span>  </div>: <div className="flex items-center gap-2"><img className=" h-3 w-3 md:h-5 md:w-5" src="/images/non-veg.png" alt="nonVeg-icon" /> <span className="text-red-600 text-xs md:text-sm font-semibold">NON-VEG</span></div> }
                <span className="">
                      {text ? (
                        <span className="flex items-center gap-1 text-xs md:text-base" style={{ color: "orange" }}>
                          <AiFillStar /> Bestseller
                        </span>
                      ) : (
                        ""
                      )}
                    </span>
              </div>
              <div className="text-xs md:text-lg font-bold md:font-semibold">{name}</div>
              <div className="text-xs md:text-sm text-gray-500 font-bold">{category}</div>
              <div className="text-gray-500 font-semibold text-xs md:text-sm">
                ₹ {price?.toString()?.slice(0, -2)}
              </div>
            </div>

            <div className="flex items-center flex-col">
              <img
                className="h-16 w-20 md:h-24 md:w-28 rounded-lg"
                src={MENU_ITEM_IMG + imageId}
                alt="menu-item"
              />
              <Button
                variant="outlined"
                onClick={()=>addItems(items)}
                style={{
                  backgroundColor: "white",
                  color: "green",
                  border: "green",
                }}
                className="relative bottom-6  "
                
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
