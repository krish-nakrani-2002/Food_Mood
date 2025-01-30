import React from 'react'
import  { useDispatch } from 'react-redux';
import { setSearch } from '../Redux/Slices/SearchSlice';

function Nav() {

  const dispatch = useDispatch();

  return (
    <nav className='flex flex-col lg:flex-row justify-between py-3 mx-6 mb-5'>
        <div>
          <h3 className='text-xl font-bold text-gray-600'>{new Date().toUTCString().slice(0,16)}</h3>
          <div className='flex h-20 justify-between py-2 mx-0 size-28 '>
          <img src="src/assets/foodmood.png" alt="" className='bg-gray-500'/>
          </div>
        </div>
        <div>
          <input 
          type="search" 
          name="search" 
          id="" 
          placeholder="Search here" 
          autoComplete='off'
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className='p-3 border border-gray-400 text-sm rounded-lg outline-none w-full lg:w-[25vw]' />
        </div>
    </nav>
  )
}

export default Nav