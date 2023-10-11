import React from 'react'
import EmptyCart from '../../components/EmptyCart/EmptyCart'
import { useDispatch, useSelector } from 'react-redux'
import { MENU_ITEM_IMG } from '../../constant/constant'
import { removeItem,clearCart } from '../../redux/features/cartSlice'

const Cart = () => {
  const data  = useSelector((store)=>store.cart.items)
  // console.log(data)
  const dispatch = useDispatch();

  
 const handlePlaceOrder =()=>{
  dispatch(clearCart())
}
  const handleRemoveParticularItem = (id) =>{
    dispatch(removeItem(id))
  }

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
          .map((item) => item.card.info.price > 0 && item.card.info.price / 100)
          .reduce((sum, a) => sum + a, 0)
      : 0;
  const finalPrice = (totalPrice + 29 + 49).toFixed();
  console.log('data',data)
  return (
    <div className='flex flex-col items-center '>
      {
        ( data.length===0 ? (<EmptyCart/>) : 
        <>
        <div className='text-2xl font-semibold '>Cart Items - {data.length} </div>
         



{Object.values(uniqueFoodItems).map((item, index) => {
          const { name, description, price, imageId,} = item[0].card.info
          const itemPrice = price/100;
          const itemQty = item[1];
          return (
            <>
             <div className="border-b-4 w-[55%]">
              <div className="flex my-4 items-center justify-between py-2  border-b-2">
                <div className="w-[60%]">
                  <h3 className="text-lg ">{name} </h3>
                  <div className="flex text-gray-600 font-medium">
                    <div className="flex items-center my-2 text-base ml-0">
                      <p className="px-2">[qty : {itemQty}]</p>
                      <span>₹</span> {itemPrice * itemQty}
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    className="h-20 rounded-md"
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
            <h2>Bill Details</h2>
            <div className="my-2">
              <div className="flex items-center justify-between">
                <p>Item Total</p>{" "}
                <span className="mx-10">{`₹${totalPrice}`}</span>
              </div>
              <div className="flex items-center justify-between">
                <p>Delivery Fee</p> <span className="mx-10">₹29</span>
              </div>
              <div className="flex items-center justify-between">
                <p>GST and Restaurant Charges</p>
                <span className="mx-10">₹49</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[55%] mb-6">
            <div className=" flex justify-between font-bold">
                <div className="flex w-[15%] justify-between">
                <h2>TO PAY</h2>
                <span>₹{finalPrice}</span>
                </div>
            
            <div>
                <button className="bg-orange-600 text-white mx-1 px-2" onClick={()=> handleClearCart()}>Clear Cart</button>
                <button className="bg-green-700 text-white mx-1 px-2" onClick={() => {
              handlePlaceOrder();
            }}>Place Order</button>
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