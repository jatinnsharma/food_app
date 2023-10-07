import React from 'react'
import {FiSearch} from 'react-icons/fi'
const SearchPage = () => {
  return (
    <div className='w-8/12 m-auto mt-10'>
        <input type="text"  placeholder='Search for restaurants and food' className='h-12 w-5/6 drop-shadow-xl pl-4 focus-visible:outline-none'/> 
        <FiSearch className='text-xl text-gray-500 relative bottom-8 ' style={{left:'51rem'}}/>
    </div>
  )
}

export default SearchPage