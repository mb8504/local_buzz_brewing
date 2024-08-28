import React from 'react'
import Home from '../pages/Home/Home'
import Beers from '../pages/Beers/Beers'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import LocalsOnly from '../pages/LocalsOnly/LocalsOnly';


const router = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home />} />,
        <Route path="beers" element={<Beers />} />,
        <Route path="locals-only" element={<LocalsOnly />} />,
      </Route>
    )
  );


const Routes = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default Routes