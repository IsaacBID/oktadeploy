import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Menu from './Menu';
import Error from "./routes/Error";
import Root from "./routes/Root";


const routes = [
  {
    path: "/", 
    element: <Root />, 
    errorElement: <Error />,
    children: [ ...Menu ]
  }
]

const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
