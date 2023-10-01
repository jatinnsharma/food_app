import React from 'react'

const Shimmer = () => {
  return (
    <div className='flex flex-wrap w-11/12 m-auto items-center justify-center'>
         {Array(16)
            .fill("")
            .map((e, index) => (
              <div key={index} className="w-64 h-52 bg-gray-200 m-10"></div>
            ))}
    </div>
  )
}

export default Shimmer