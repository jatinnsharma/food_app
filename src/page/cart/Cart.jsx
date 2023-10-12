import React from 'react'
import EmptyCart from '../../components/EmptyCart/EmptyCart'
import { useDispatch, useSelector } from 'react-redux'
import { MENU_ITEM_IMG } from '../../constant/constant'
import {clearCart } from '../../redux/features/cartSlice'


const Cart = () => {
  const data  = useSelector((store)=>store?.cart?.items)
  const dispatch = useDispatch();

  


  const handleClearCart = () => {
    dispatch(clearCart());
  };
  let uniqueFoodItems = [];
  if (data.length > 0) {
    let uniqueItems = [...new Set(data)];

    uniqueFoodItems = uniqueItems.map((value) => [
      value,
      data.filter((item) => item === value).length,
    ]);
  }

  const totalPrice =
  data.length > 0
      ? data
          .map((item) => item?.card?.info?.price > 0 && item?.card?.info?.price / 100)
          .reduce((sum, a) => sum + a, 0)
      : 0;
  const finalPrice = (totalPrice + 19 + 39).toFixed();


  return (
    <div className='flex flex-col items-center '>
      {
        ( data.length===0 ? (<EmptyCart/>) : 
        <>
        <div className='text-2xl my-6 font-semibold '>Cart Items - {data.length} </div>
         



{Object.values(uniqueFoodItems).map((item, index) => {
          const { name, price, imageId,} = item[0]?.card?.info
          const itemPrice = price/100;
          const itemQty = item[1];
          return (
            <>
             <div className="border-b-4 w-[55%]">
              <div className="flex my-4 items-center justify-between py-2  border-b-2">
                <div className="w-[60%]">
                  <h3 className="text-sm  md:text-lg font-bold">{name} </h3>
                  <div className="flex text-gray-600 font-medium">
                    <div className="flex items-center my-2 text-base ml-0">
                      <p className="text-sm px-2">[Qty : {itemQty}]</p>
                      <span>₹</span> {itemPrice * itemQty}
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="h-16 w-16  md:h-20 md:w-20 rounded-md"
                    alt="res-img"
                    src={MENU_ITEM_IMG + imageId}
                  />
                </div>
              </div>
              </div>
            </>
          );
        })}
     

      {data.length > 0 ? (
        <>
        <div className="flex flex-col w-[55%] my-4 border-b-2 border-b-black">
          <div className="w-[50%]">
            <h2 className='font-bold'>Bill Details</h2>
            <div className="my-2 w-[18rem]">
              <div className="flex items-center justify-between   ">
                <p className=''>Item Total</p>{" "}
                <span className="mx-10">{`₹${totalPrice}`}</span>
              </div>
              <div className="flex items-center justify-between">
                <p>Delivery Fee</p> <span className="mx-10">₹19</span>
              </div>
              <div className="flex items-center justify-between ">
                <p>GST and Restaurant Charges</p>
                <span className="mx-10">₹39</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[55%] mb-6 ">
            <div className=" flex md:justify-between font-bold flex-col md:flex-row">
                <div className="flex w-[16rem] mb-5 justify-between">
                <h2>TO PAY</h2>
                <span>₹{finalPrice}</span>
                </div>
            
            <div>
                <button className="bg-orange-600 text-white mx-1 px-2" onClick={()=> handleClearCart()}>Clear Cart</button>
                <button className="bg-green-700 text-white mx-1 px-2" onClick={() => {
              
            }}>Checkout</button>
            </div>
            </div>
            
        </div>
        </>
      ) : (
        [null]
      )}
       </>)
      }
    </div>
  )
}

export default Cart