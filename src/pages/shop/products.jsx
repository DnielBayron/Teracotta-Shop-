import { useContext } from "react";
import { CartContext } from "../../context/cartContext"; 

export const Products = (props) => {
const {addToCart, cartItems, removeToCart} = useContext(CartContext)
const {id, prdName, price, productImage} = props.data;
const cartItemAmount = cartItems [id];



  return (

<div className="bg-white/25 border shadow-lg rounded-2xl">
            <img className="w-full object-cover rounded-t-lg" src={productImage} alt="tera.img" />
                <div className="text-center font-serif py-2 ">
                    <h1 className="text-xl lg:text-2xl mt-2 p-2">{prdName}</h1>
                    {cartItemAmount > 0 && <div className=""> ({cartItemAmount}) </div> }
                    <button onClick={() => addToCart(id)} className="border border-black rounded-2xl p-1 my-3 lg:px-3 bg-transparent text-black hover:bg-black hover:text-white hover:scale-110 duration-150">Add to cart </button>
                </div>

</div>
    
  )
}
