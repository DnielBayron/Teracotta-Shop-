import { useState } from "react";
import { CartContext } from "../../context/cartContext";
import {DATA} from '../../data'

// Default 0 item in Cart. Initial State = 0.
const getDefault = () => {
    let cart = {};
    for (let i=1 ; i <DATA.length + 1 ; i++){
        cart[i] = 0;
    }
    return cart;
}
// Cart[i] = key ID's in DATA

export const CartProvider = ({children}) => {
    const [cartItems, setCartItems] = useState(getDefault());

    const getTotalCartAmount = () => {
        let totalAmount = 0;
    for (const item in cartItems) {
    if(cartItems[item] > 0) {
        let itemInfo = DATA.find ((product) => product.id === Number(item))
        totalAmount += cartItems[item] * itemInfo.price;
    }
    }
    return totalAmount;
    };
    

    const addToCart = (itemId) => {
        setCartItems ((prev) => ({...prev, [itemId]: prev[itemId] + 1 }))
    };

    const subToCart = (itemId) => {
        setCartItems ((prev) => ({...prev, [itemId]: prev[itemId] -1}))
    };

    const removeToCart = (itemId) => {
        setCartItems ((prev) => ({...prev, [itemId]: prev[itemId] = 0}))
    };


    


  return (
   <CartContext.Provider
   value={{cartItems , addToCart , subToCart, removeToCart, getTotalCartAmount}}>

    {children}

   </CartContext.Provider>
  )
};

