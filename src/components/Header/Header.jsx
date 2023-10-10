import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { LOGO_URL } from '../../constant/constant'
import { BiSolidOffer } from 'react-icons/bi'
import {LiaShoppingBagSolid} from 'react-icons/lia'
const Header = () => {
  const [isLoggedIn , setIsLoggedIn] = useState(false)
  return (
    <div className='h-20 bg-white shadow-lg flex items-center justify-around '>
        <div className='flex gap-6'>
            <Link to={'/'} className=' text-2xl flex  items-center justify-center'>
              <img className='h-16 relative left-4 hover:scale-125 transition-all duration-500 cursor-pointer ' src={LOGO_URL} alt='logo-pic' />
             <div style={{fontFamily:'Dancing Script,cursive '}} className=' text-gray-700 font-semibold hover:text-orange-500'> Nanny's Kitchen </div>
            </Link>
            <div className='flex mt-1 gap-2 items-center'>
        <div className='font-bold underline '>Sector 73</div>
         <div className='text-gray-500'>Phase-8,Industrial Area,Sahibzad...</div>
        </div>
            </div>
        <div className='flex gap-12 items-center font-semibold text-gray-700'>
            <Link to={'/search-page'} className='cursor-pointer flex items-center gap-1 hover:text-orange-400 hover:scale-105'>
            <FiSearch className='text-orange-500 text-lg'/>
              Search</Link>
            <Link className='hover:text-orange-400 hover:scale-105 flex items-center gap-1' to={'./available-offers'}>
            <BiSolidOffer className=' text-lg'/>
              Offers
              <span className='relative bottom-3 text-sm text-orange-500'>new</span>
              </Link>
            <Link className='hover:text-orange-400 hover:scale-105' to={'./about-page'}>About</Link>
            {isLoggedIn ? (<button onClick={()=>setIsLoggedIn(false)}>Logout</button>) : (
              <button className='hover:text-orange-400 hover:scale-105' onClick={()=>setIsLoggedIn(true)}>Login</button>
            )
            }
            <Link className='hover:text-orange-400 hover:scale-105 flex items-center ' to={'/cart'}>
              <LiaShoppingBagSolid style={{fontSize:'1.8rem'}}/>
              <span style={{right:'1.1rem',top:'0.2rem'}} className='relative text-xs'>1</span>
              <div>Cart</div>
              </Link>
        </div>
    </div>
  )
}

export default Header