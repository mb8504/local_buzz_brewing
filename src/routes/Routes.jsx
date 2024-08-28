import React from 'react'
import Home from '../pages/Home/Home'
import Beers from '../pages/Beers/Beers'
import LocalsOnly from '../pages/LocalsOnly/LocalsOnly';
import Contact from '../pages/Contact/Contact';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />,
        <Route path="beers" element={<Beers />} />,
        <Route path="locals-only" element={<LocalsOnly />} />,
        <Route path="contact" element={<Contact />} />,
      </Route>
    )
  );


const Routes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes