import React from 'react'
const HeroBanner = () => {
  return (
    <div className='bg-gray-100  md:pt-24 pb-6 '>
       <div className='relative max-w-6xl mx-auto md:rounded-2xl pt-28 bg-cover bg-center h-[500px] '
        style={{backgroundImage:`url(https://variety.com/wp-content/uploads/2023/10/jenna-ortega.jpg?w=1002)`,backgroundPosition:`center`}}>
        <div className='absolute inset-0 bg-black md:rounded-2xl bg-opacity-40 flex items-center justify-center'>
          <div className='text-center text-gray-100 px-4'>
                   <h1 className='text-3xl md:text-5xl lg:text-6xl sm:mb-5 font-bold ' >Discover Your Style</h1>
                   <p className='text-lg  md:text-xl mb-6'>Shop the latest and find your perfect look</p>
                   <button className='bg-transparant border  border-white hover:bg-white hover:text-black text-white font-semibold py-2 px-4 md:py-3 md:px-6
                   rounded-lg transition duration-300' >Shop Now</button>
          </div>
        </div>
       </div>
    </div>
  )
}

export default HeroBanner