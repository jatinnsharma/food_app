import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
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
            <Link to={'/search-page'} className='cursor-pointer'>Search</Link>
            <a href="#">Offers</a>
            <a href="#">Help</a>
            {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>Logout</button>) : (
              <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            )
            }
            <a href="#">Cart</a>
        </div>
    </div>
  )
}

export default Header