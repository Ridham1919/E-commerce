import React from 'react'
import Navbar from './components/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Mens from './Pages/Mens'
import Womens from './Pages/Womens'
import Kids from './Pages/Kids'
import Login from './Pages/Login'
import Cart from './Pages/Cart'
import Footer from './components/Footer'

const router = createBrowserRouter([

  {
    path:"/",
    element:<><Navbar/><Home/><Footer/></>
  },
  {
    path:"/mens",
    element:<><Navbar/><Mens/></>
  },
  {
    path:"/womens",
    element:<><Navbar/><Womens/></>
  },
  {
    path:"/kids",
    element:<><Navbar/><Kids/></>
  },
  {
    path:"/login",
    element:<><Navbar/><Login/></>
  },
  {
    path:"/cart",
    element:<><Navbar/><Cart/></>
  }
])

const App = () => {
  return (
       
    <RouterProvider router={router}/>
  )
}

export default App