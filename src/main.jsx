import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import Navbar from './Components/Small Components/Navbar'
import Homepage from './Components/Large Components/Homepage'
import ProjectsDesc from './Components/Small Components/Project Case Study/ProjectsDesc'
import ScrollToTop from './Components/Small Components/Router/ScrollToTop'
  const router = createBrowserRouter([
    {
      path: '/',
      element: <><Navbar /><Homepage /></>,
      errorElement: <>OOPS! PAGE NOT FOUND</>
    },
    {
      path: '/weather',
      element:
        <ScrollToTop>
          <ProjectsDesc />
        </ScrollToTop>
    }
  ])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <RouterProvider router={router}/>
    </React.StrictMode>,
  )
