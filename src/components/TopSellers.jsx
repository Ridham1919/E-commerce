import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import Item from './Item'

const TopSellers = () => {
  const { All_product } = useContext(Shopcontext)
  return (
    <>
     <div className='p-10'>
  <h2 className='text-4xl font-bold tracking-tight text-gray-900 text-center font-seif'>Top Sellers</h2>
  <p className='text-center mt-3 md:px-56'>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, consequatur reiciendis adipisci
    suscipit hic excepturi eos eligendi porro delectus harum!
  </p>
</div>
<div className='mx-auto max-w-7xl pt-6 pb-12 lg:px-8'>
  <div className='grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
    {All_product.slice(0, 20).map((product) => {
      return <Item key={product.id} product={product} />
    })}
  </div>
</div>

    </>
  )
}

export default TopSellers