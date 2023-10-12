import React, { useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { LOGO_URL } from '../../constant/constant'
import { BiSolidOffer } from 'react-icons/bi'
import {LiaShoppingBagSolid} from 'react-icons/lia'
import { useSelector } from 'react-redux'
import { MdMenu, MdClose } from 'react-icons/md';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const {items} = useSelector((state)=>state.cart)

  const [isLoggedIn , setIsLoggedIn] = useState(false)
  return (
    
    <div className='h-20 bg-white shadow-lg flex items-center justify-around '>
      
        <div className='relative right- md:flex gap-6 '>
            <Link to={'/'} className='z-20 text-lg md:text-2xl flex items-center justify-center'>
              <img className='h-16 relative left-4 hover:scale-125 transition-all duration-500 cursor-pointer ' src={LOGO_URL} alt='logo-pic' />
             <div style={{fontFamily:'Dancing Script,cursive '}} className=' text-gray-700 font-semibold hover:text-orange-500'> Nanny's Kitchen </div>
            </Link>
            <div className='hidden xl:flex mt-1 gap-2 items-center '>
        <div className='font-bold underline '>Sector 73</div>
         <div className='text-gray-500'>Phase-8,Industrial Area,Sahibzad...</div>
        </div>
            </div>

          

        <div className={ `md:flex md:gap-12 items-center font-semibold text-gray-700 ${isOpen ? 'block fixed left-0 top-0 bg-white w-[60%] p-20 flex flex-col gap-2 h-56 rounded-md z-10' : 'hidden'}`}>

            <Link to={'/search-page'} className='cursor-pointer flex items-center gap-1 hover:text-orange-400 hover:scale-105'>
            <FiSearch className='text-orange-500 text-lg'/>
              Search</Link>
            <Link className='hover:text-orange-400 hover:scale-105 flex items-center gap-1' to={'./available-offers'}>
            <BiSolidOffer className=' text-lg'/>
              Offers
              <span className='relative bottom-3 text-sm text-orange-500'>new</span>
              </Link>
            <Link className='hover:text-orange-400 hover:scale-105' to={'./about-page'}>About</Link>
            {isLoggedIn ? (<button className='hover:text-orange-400 hover:scale-105' onClick={()=>setIsLoggedIn(false)}>Logout</button>) : (
              <button className='hover:text-orange-400 hover:scale-105' onClick={()=>setIsLoggedIn(true)}>Login</button>
            )
            }
        </div>
            <Link className='hover:text-orange-400 hover:scale-105 flex items-center ' to={'/cart'}>
              <LiaShoppingBagSolid style={{fontSize:'1.8rem'}}/>
              <span style={{right:'1.1rem',top:'0.2rem'}} className='relative text-xs'>{items.length}</span>
              <div>Cart</div>
              </Link>
              <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isOpen ? <MdClose size={23}/> : <MdMenu size={23}/>}
          </button>
        </div>
    </div>
  )
}

export default Header