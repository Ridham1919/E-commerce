import React, { useState } from 'react'
// import Zara from  '../assets/Zara_(retailer)-Logo.wine.svg'
import Logo from '../assets/R-removebg-preview.png'
import { FiShoppingCart } from "react-icons/fi";
import { Link } from 'react-router-dom';
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';


const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false)

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }
  return (
       <div className='bg-white px-4 fixed w-full z-50 shadow-sm  shadow-gray-300   md:h-[14%] items-center content-center'>
           <div className='max-w-7xl mx-auto py-2 px-5 flex justify-between items-center'>
            <div className='w-20'>
               <img src={Logo} alt="" className=' sm:w-5 md:w-40 w-20 '/>
            </div>
               <div className='flex items-center gap-5'>
                   <nav className='hidden md:block'>
                       <ul className='flex items-center font-semibold text-base gap-7'>
                           <Link to={'/'}><li>Home</li></Link>
                           <Link to={'/mens'}>Mens</Link>
                           <Link to={'/womens'}> <li>Womens</li></Link>
                           <Link to={'/kids'}><li>Kids</li></Link>
                           <Link to={'/login'}> <button className='bg-red-500 text-white px-4 py-2 rounded-md'>Login</button></Link>
                       </ul>
                   </nav>
                   <Link to={'/cart'} className='relative w-10'>
                   <FiShoppingCart size={25} />
                   <div className='bg-red-500 w-4 h-4 text-xs absolute -top-2 right-1 flex items-center justify-center rounded-full
                   text-white'>0</div>
                   </Link>

                   {/* mobile hambure icons */}
                   {showMenu ? (
                     <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden' size={30} />
                   ):(
                   <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden' size={30} />
                   )}
               </div>
           </div>
           <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu}/>
       </div>
  )
}

export default Navbar