import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { LOGO_URL } from '../../constant/constant'

const Header = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  return (
    <div className='h-20 bg-white flex items-center  justify-around '>
        <div className='flex gap-6'>
            <Link to={'/'} className=' text-2xl flex  items-center justify-center'>
              <img className='h-20 relative left-4 hover:scale-110 transition-all duration-500 cursor-pointer ' src={LOGO_URL} alt='logo-pic' />
             <div style={{fontFamily:'Dancing Script,cursive '}} className=' text-gray-700 font-semibold hover:drop-shadow-2xl'> Nanny's Kitchen </div>
            </Link>
            <div className='flex mt-1 gap-2 items-center'>
        <div className='font-bold underline '>Sector 73</div>
         <div className='text-gray-500'>Phase-8,Industrial Area,Sahibzad...</div>
        </div>
            </div>
        <div className='flex gap-12 font-semibold '>
            <Link to={'/search-page'} className='cursor-pointer flex items-center gap-1'>
            <FiSearch className='text-red-600'/>
              Search</Link>
            <a href="#">Offers</a>
            <a href="#">Help</a>
            {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>Logout</button>) : (
              <button onClick={()=>setIsLoggedIn(true)}>Login</button>
            )
            }
            <a href="#">Cart 0 </a>
        </div>
    </div>
  )
}

export default Header