import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Donation from './components/Donation/Donation.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';
import DonationDetails from './components/DonationDetails/DonationDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/donation",
        element: <Donation></Donation>,
        loader: () => fetch('blogs.json')
      },
      {
        path: "/details/:id",
        element: <DonationDetails></DonationDetails>,
        loader: () => fetch('blogs.json')
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
