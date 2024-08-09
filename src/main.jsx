import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Components/Layout'
import Info from './pages/Info.jsx';

import Home from './pages/Home.jsx';
import AnimesPage from './pages/Animes.jsx';
const router = createBrowserRouter([
  {
    path: "",
    element: <App/>,
    children: [
      {
        path:"",
        element:<Home/>
      },
      {
        path:"animes",
        element: <AnimesPage></AnimesPage>
      },
      {
        path:"info",
        element:<Info/>
      }
    ]
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
