import { useContext } from "react";
import { CartContext } from "../../context/cartContext"; 

export const CartItem = (props) => {
const {cartItems , addToCart, subToCart, removeToCart} = useContext(CartContext);
const {id, prdName, price, productImage} = props.data;

  return (
    <div className="grid grid-cols-2 mb-12 bg-white/20 items-center shadow-lg rounded-xl shadow-black mt-12">
            
            <div>
            <img className=" rounded-l-xl object-cover"src={productImage} alt="" />
            <h1 className="text-sm lg:text-xl font-bold bg-orange-600 text-white">X <span className="text-xl lg:text-3xl font-bold text-white"> {cartItems[id]} </span> </h1>
            </div>
            
                <div className="font-serif font-bold text-sm md:text-xl pb-3">
                    <h1>{prdName}</h1>
                    <p>₱{price}</p>
                <div className="mt-3" >
                    <button className=" text-red-500 text-[30px] lg:text-[50px] px-6 hover:scale-150 duration-500" onClick={()=> subToCart(id)}> - </button>
                    <button className=" text-green-500 text-[30px] lg:text-[50px] px-6 hover:scale-150 duration-500" onClick={()=> addToCart(id)}> + </button>
                    </div>

                <div className="mt-2">
                    <button className="text-sm lg:text-lg border px-2 rounded-xl bg-red-200 text-red-500 hover:bg-red-500 hover:text-white" onClick={()=> removeToCart(id)}> Remove </button>
                </div>
                </div>
           
      

    </div>
    
  )
}
