import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Navbar from "./Components/Small Components/Navbar";
import Homepage from "./Components/Large Components/Homepage";
import WeatherDesc from "./Components/Small Components/Project Case Study/WeatherDesc";
import ScrollToTop from "./Components/Small Components/Router/ScrollToTop";
import YtCrawlerDesc from "./Components/Small Components/Project Case Study/YtCrawlerDesc";
import DarkModeContext from "./Components/Contexts/DarkModeContext";
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
      <ScrollToTop>
        <WeatherDesc />
      </ScrollToTop>
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

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DarkModeContext>
      <RouterProvider router={router} />
    </DarkModeContext>
  </React.StrictMode>
);
