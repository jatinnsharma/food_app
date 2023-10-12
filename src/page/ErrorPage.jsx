import React from 'react'
// import { useRouteError } from 'react-router-dom'
import { Link } from "react-router-dom";
import { ERROR_IMG } from '../constant/constant';

const ErrorPage = () => {
    // const err = useRouteError()
    // console.log(err) 
    // This feature only works if using a data router
  return (

    <div style={{height:'100vh',width:'100vw'}} className='flex flex-col items-center justify-center'>
      <img
        className='h-60 md:h-96'
        src={ERROR_IMG}
        alt="cartimg"
      />
      <h4 className="text-2xl font-semibold text-gray-700">
        Page not found
      </h4>
      <p className='text-sm w-72 my-4 md:w-full md:text-center text-gray-400'>
        Uh-oh! Looks like the page you are trying to access, doesn't exist.{" "}
        <br />
        Please start refresh.
      </p>
      <Link to="/">
        <button
          type=""
          className="bg-green-700 text-white py-2 px-4 rounded-lg"
        >
          GO HOME
        </button>
      </Link>
    </div>

  )
}

export default ErrorPage