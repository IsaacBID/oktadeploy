import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { MantineProvider } from '@mantine/core';
import '@mantine/core/styles.css';
import Theme from './Theme';

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
    <MantineProvider theme={Theme}>
      <RouterProvider router={router} />
    </MantineProvider>
  </React.StrictMode>,
)
