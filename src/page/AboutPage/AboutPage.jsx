import React, { useEffect, useState } from 'react'
import RestaurantMenuShimmmer from '../../Shimmer/RestaurantMenuShimmer';
import {BsGithub,BsLinkedin,BsWhatsapp} from 'react-icons/bs'
import {CgMail} from 'react-icons/cg'
import { Link } from 'react-router-dom';

const AboutPage = () => {
    const [userData,setData] = useState([]);

    useEffect(()=>{
        getData();
    },[])
    async function getData () {
        //Github links
        const data = await fetch('https://api.github.com/users/jatinnsharma')
        const json  = await data.json();
        setData(json)
    }
    const  {login,avatar_url,html_url,followers,following,location,name} = userData
  return  (
    <div style={{height:'77vh',width:'100vw'}} className='overflow-x-hidden' >
        <div className=' flex justify-center items-center mt-12'>
       <div className='w-2/6 flex items-center justify-center'>
        <img className='h-72 rounded-full' src={avatar_url} alt="avatar" />
       </div>
       <div className='w-3/6'>
        <div className='text-3xl text-gray-800 font-semibold mb-6'>ABOUT ME</div>
        <div className='w-5/6 text-gray-500'>Hello, I'm Jatin Sharma. I'm a passionate web developer with experience in front-end and back-end technologies. I enjoy creating user-friendly and efficient web applications using JavaScript, Node.js, and various frameworks. In my free time, I like to learn new technologies and contribute to open-source projects</div>
       </div>
        </div>

        <div className=' h-16 w-4/6 m-auto rounded-xl shadow-md mt-24 flex justify-center items-center gap-8 text-3xl cursor-pointer '>
            <div className='text-gray-600 font-semibold text-xl'>Contact :</div>
            <div className='flex hover:text-gray-600 hover:scale-105'>
            <Link to='https://github.com/jatinnsharma' target="_blank" ><BsGithub/> 
            </Link>
            <span className=' text-xs relative bottom-4 right-1'>Github</span>
            </div>

            <div className=' flex text-blue-700 hover:text-blue-600 hover:scale-105'>
                <Link to={'https://www.linkedin.com/in/jatin-sharma-606546267/'} target='_blank'>
                <BsLinkedin/>
                </Link>
                <span className=' text-xs relative bottom-4 right-1'>Connect</span>
                </div>
            <div className='text-red-600 text-4xl hover:text-red-700 hover:scale-105 flex '>
             <Link  to={'mailto:jatinsharma2231@gmail.com'}>
                <CgMail/>
                </Link>  
                <span className=' text-xs relative bottom-4 right-2'>Send Mail</span>
            </div>
            <div className='text-green-600 flex items-center gap-2 hover:scale-105'>
                <Link to={'https://wa.me/9050603853'} target='_blank'>
                <BsWhatsapp/>
                </Link>
            <span className=' text-xs relative bottom-4 right-2'> WhatApp</span> </div>
        </div>
    </div>
  )
}

export default AboutPage