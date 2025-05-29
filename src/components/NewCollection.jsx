import React, { useContext } from 'react'
import { Shopcontext } from '../Context/ShopContext'
import Item from './Item'

const NewCollection = () => {
  const { New_collection } = useContext(Shopcontext)
  return (

    <div>
      <div className='mx-auto max-w-2xl px-4 py-16 sm:pt-30 lg:max-w-7xl lg:px-8'>
        <h2 className='text-4xl font-bold tracking-tight text-gray-900 text-center font-seif'>New Collection</h2>
        <p className='text-center mt-3 md:px-56'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil, consequatur reiciendis adipisci
          suscipit hic excepturi eos eligendi porro delectus harum!</p>
        <div className='mt-10 grid grid-cols-1 gap-x-6 gap-y-10 px-6 md:px-0 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8'>
          {New_collection.map((product) => {
            return <Item key={product.id} product={product} />
          })}
        </div>
      </div>
    </div>
  )
}

export default NewCollection