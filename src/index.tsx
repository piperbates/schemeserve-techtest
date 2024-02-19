import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorElement from './Routes/error';
import GlobalStyle from './globalStyles';
import PageLayout from './Routes/pageLayout';
import MapView from './Routes/MapView';
import DataView from './Routes/DataView';

const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: '/map',
        element: <MapView />,
      },
      {
        path: '/data',
        element: <DataView />,
      },
      {
        path: '/previous-searches',
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
