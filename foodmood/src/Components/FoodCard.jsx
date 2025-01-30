import React from 'react'
import { FaStar } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { addTOCart } from '../Redux/Slices/CartSlice';

const FoodCard = ({id, name, price, desc, img, rating, handToast}) => {

  const dispatch = useDispatch();

  return (
    <div className='font-bold w-[250px] bg-white p-5 flex flex-col gap-2 rounded-lg '>
        <img 
        src= {img}
        alt=""
        className='w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out' />

        <div className='text-sm flex justify-between'>
            <h2>{name}</h2>
            <span className='text-green-500'>${price}</span>
        </div>

        <p className='text-sm font-normal'>{desc.slice(0, 60)}...</p>

        <div className='flex justify-between'>
            <span className='flex justify-center items-center gap-1'>
                <FaStar className='text-yellow-400' />
                <span>{rating}</span>
            </span>
            <button onClick={() => {
              dispatch(addTOCart({id, name, price, rating, img, qty: 1})
            );
              handToast( name );
            }} 
            className='p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm'>Add to cart</button>
        </div>
    </div>
  )
}

export default FoodCard