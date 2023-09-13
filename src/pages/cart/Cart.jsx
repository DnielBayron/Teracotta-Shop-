import { CartContext } from "../../context/cartContext"; 
import {DATA} from '../../data';
import { CartItem } from "./Cart-Item";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import {BsFillCartPlusFill} from 'react-icons/bs';


export const Cart = () => {
  const {cartItems, getTotalCartAmount} = useContext(CartContext);
  const totalAmount = getTotalCartAmount ();
  const navigate = useNavigate();


  return (
    <div className="max-w-[1536px] m-auto text-center px-8 md:px-24 lg:px-32 xl:px-96 ">
    
       {totalAmount > 0 ? ( 
      <div className="my-6">
        <h1 className="text-4xl lg:text-4xl font-serif font-bold mb-10  "> Your Cart </h1>
        <p className="text-xl lg:text-xl text-red-500 font-bold">Subtotal : <span className="text-3xl">₱{totalAmount}</span> </p>
        <button className="text-sm lg:text-lg border-black text-black border rounded-lg bg-opacity hover:bg-black hover:text-white font-serif py-1 px-3 mx-4 mt-4 " onClick={() => navigate('/shop')}>Continue Shopping</button>
        <button className="text-sm lg:text-lg border-black text-black border rounded-lg bg-opacity hover:bg-black hover:text-white font-serif py-1 px-3 mx-4 mt-4 ">Checkout</button>
      </div>
       ): (
        <btn onClick={() => navigate('/shop')} className=" flex justify-center items-center my-24 hover:scale-105 duration-200 hover:text-orange-500 "> <BsFillCartPlusFill size={66} /> </btn>
       )}


{/* Card */}

  {DATA.map((item , index) => {
    if (cartItems[item.id] !== 0) {
      return <CartItem key={index} data= {item}/>
    }
  })}



</div>
  )
}
