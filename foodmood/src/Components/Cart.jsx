import React from 'react'
import { AiOutlineClose  } from "react-icons/ai";
import ItemCard from './ItemCard';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalAmount = cartItems.reduce((totalAmount, item) => totalAmount + item.price * item.qty, 0);

  const navigate = useNavigate();

  return (
  <>
    <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full p-5 bg-white mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"} transition-all duration-500`}>
        
        <div className='flex justify-between iteams-center my-3'>
            <span className='text-xl font-bold text-gray-800'>My Order</span>
            <AiOutlineClose onClick={() => setActiveCart(!activeCart)} className='border-2 border-gray-600 text-gray-600 font-bold p-1 text-xl rounded-md hover:text-red-400 hover:border-red-400 cursor-pointer' />
        </div>

        {cartItems.length > 0 ? cartItems.map((food) => {
            return (
            <ItemCard 
            key={food.id} 
            id={food.id}
            name={food.name}
            price={food.price}
            img={food.img}
            qty={food.qty}
            />
            ) 
        }) : <h2 className='text-center text-xl font-bold text-gray-800 py-3'>Your cart is empty</h2>}


        <div className='absolute bottom-0'> 
            <h3 className='font-semibold text-gray-800'>Items: {totalQty} </h3>
            <h3 className='font-semibold text-gray-800'>Total Amount: ₹{totalAmount} </h3>
            <hr className='w-[90vw] lg:w-[18vw] my-2' />
            <button
            onClick={() => navigate("/success")} 
            className='bg-green-500 font-bold text-white px-3 py-2 rounded-lg w-[90vw] lg:w-[18vw] mb-5'>Checkout
            </button>
        </div>
  </div>

        <FaShoppingCart 
         onClick={() => setActiveCart(!activeCart)} 
         className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-4 right-4 ${
            totalQty > 0 && "animate-bounce delay-500 transition-all"
         }`} 
         />
  </>
  )
}

export default Cart