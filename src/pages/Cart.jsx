import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";
const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    if (Array.isArray(cart)) {
      setTotalAmount(cart.reduce((acc, cur) => acc + cur.price, 0));
    } else {
      setTotalAmount(0);
    }
  }, [cart]);
  

  return (
    <div className=" m-[90px]">
      {cart.length > 0 ? (
        <div className=" flex justify-center gap-10">
          <div>
            {
              cart.map((item, index) => (
                <CartItem key={item.id} item={item} itemIndex={index} />
              ))
            }
          </div>
          <div className=" flex flex-col justify-between py-5">

            <div className=" flex flex-col">
              <div className=" flex flex-col">
                <div className=" text-green-700 font-bold text-[23px]">Your Cart</div>
                <div className=" text-green-700 font-semibold text-[20px]">Summary</div>
              </div>
              <br />
              <p>
                <span className=" font-semibold">Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p className=" font-bold">Total Amount: ${totalAmount}</p>
              <button className=" bg-green-600 p-2 font-semibold text-center rounded-xl text-white hover:bg-green-700 hover:scale-105 transition-all">
                CheckOut Now
              </button>
            </div>

          </div>
        </div>
      ) :
        (
          <div className=" flex flex-col items-center justify-center gap-y-3 mt-20">
            <p>Your Cart is Empty</p>
            <NavLink to="/" >
              <button className=" text-gray-700 border-2 border-gray-700 p-2 text-center rounded-xl text-gray-700 hover:scale-110 hover:bg-gray-700  hover:text-white transition-all font-semibold">Shop Now</button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
};

export default Cart;
