import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Browse from './Browse';
import Login from './Login';
import Restaurants from './Restaurants';
import Orders from './Orders';
import RestaurantMenu from './RestaurantMenu';

const AppBody = () => {
  const appRouter = createBrowserRouter([
    {
      path: '/',
      element: <Login />, 
    },
    {
      path: '/browse',
      element: <Browse />,
    },
    {
      path: '/restaurants',
      element: <Restaurants />,
    },
    {
      path: '/restaurant/:restaurantId',
      element: <RestaurantMenu />,
    },
    {
      path: '/orders',
      element: <Orders />,
    }
  ]);

  return (
    <RouterProvider router={appRouter} />
  );
};

export default AppBody;
