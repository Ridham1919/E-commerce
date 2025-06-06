import React, { useContext } from 'react'
// import banner from '../assets/kids.png'
import { Shopcontext } from '../Context/ShopContext'
import Item from '../components/Item'


const Kids = () => {
  const { All_product } = useContext(Shopcontext)
  const kidProducts = All_product.filter((product) => product.category === "kid")
  return (
    <div className='md:mt-20  mt-20 max-w-7xl mx-auto'>
      <div >
        <img src="https://clothify-two.vercel.app/assets/KidsBanner-Bu4nYWZf.png" alt="" className=' p-5 ' />
      </div>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-24 lg:max-w-7xl lg:px-8'>
        <h2 className='text-2xl font-bold tracking-tight text-gray-900 text-center md:text-start'>Kid's Collection</h2>
        <div className='mt-6 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {
            kidProducts.map((product) => {
              return <Item key={product.id} product={product} />
            })

          }
        </div>
      </div>
    </div>
  )
}

export default Kids