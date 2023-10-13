import React from 'react'
import Home from './pages/home/Home';
import Navbar from './components/navbar/Navbar';
import Footer from './components/footer/Footer';
import About from "./pages/about/About"
import Nmap from "./pages/nmap/Nmap"
import Notification from './components/notification/Notification ';

import {
    createBrowserRouter,
    RouterProvider,
    Outlet
  } from "react-router-dom";

const App = () => {
    
    const Layout = () => {
        return (
            <div className="app">
            <Notification/>
            <Navbar />
            <Outlet />
            <Footer />
          </div>
        );
    };
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Layout/>,
          children:[
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
              path:"/nmap",
              element:<Nmap/>
            }
          ]
        }
      ]);
 
    return (
    <div>
       <RouterProvider router={router} />
    </div>
  )
}

export default App
