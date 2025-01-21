import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import Navbar from "./Components/Small Components/Navbar";
import Homepage from "./Components/Large Components/Homepage";
import WeatherDesc from "./Components/Small Components/Project Case Study/WeatherDesc";
import ScrollToTop from "./Components/Small Components/Router/ScrollToTop";
import YtCrawlerDesc from "./Components/Small Components/Project Case Study/YtCrawlerDesc";
import DarkModeContext from "./Components/Contexts/DarkModeContext";
function App() {
  const router = createBrowserRouter([
    {
      path: "/og-portfolio",
      element: (
        <>
          <Navbar />
          <Homepage />
        </>
      ),
      errorElement: <>OOPS! PAGE NOT FOUND</>,
    },
    {
      path: "/og-portfolio/weather",
      element: (
        <ScrollToTop> <WeatherDesc /> </ScrollToTop>
      ),
    },
    {
      path: "/og-portfolio/ytcrawler",
      element: (
        <ScrollToTop>
          <YtCrawlerDesc />
        </ScrollToTop>
      ),
    },
  ]);

  return (
    <div>
      <DarkModeContext>
        <RouterProvider router={router} />
      </DarkModeContext>
    </div>
  );
}

export default App;
