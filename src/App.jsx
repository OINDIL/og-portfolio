import React from 'react'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'

import Navbar from './Components/Small Components/Navbar'
import Homepage from './Components/Large Components/Homepage'
function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<><Navbar/><Homepage/></>,
      errorElement:<>OOPS! PAGE NOT FOUND</>
    }
  ])
  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App