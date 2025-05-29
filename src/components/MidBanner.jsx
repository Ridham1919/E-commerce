import React from 'react'
const MidBanner = () => {
  return (
     <div className='bg-gray-100 py-24'>
       <div className='relative  max-w-6xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[500px] '
        style={{backgroundImage:`url(https://assets.teenvogue.com/photos/64403f8809e18833cf1d7ab2/16:9/w_5999,h_3374,c_limit/1471768314)`,backgroundPosition:`top`,backgroundAttachment:`fixed` }}>
        <div className='absolute inset-0 bg-black md:rounded-2xl bg-opacity-50 flex items-center justify-center'>
          <div className='text-center text-white px-4'>
                   <h1 className='text-3xl md:text-5xl lg:text-5xl font-bold mb-4'> Winter Collection 2025 </h1>
                   <p className='text-lg md:text-xl mb-6'>Shop the latest and find your perfect look</p>
                   <button className='bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 md:py-3 md:px-6
                   rounded-lg transition duration-300' >Shop Now</button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default MidBanner