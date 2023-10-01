import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='h-16 bg-white flex items-center  justify-around '>
        <div className='flex gap-6'>
            <Link to={'/'} className='text-2xl italic'>
             Nani's Kitchen </Link>
            <div className='flex mt-1 gap-2'>
        <div className='font-bold underline '>Sector 73</div>
         <div className='text-gray-500'>Phase-8,Industrial Area,Sahibzad...</div>
        </div>
            </div>
        <div className='flex gap-12 font-semibold '>
            <a href="#">Search</a>
            <a href="#">Offers</a>
            <a href="#">Help</a>
            <a href="#">Sign</a>
            <a href="#">Cart</a>
        </div>
    </div>
  )
}

export default Header