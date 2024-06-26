import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './component/Root';
import Error from './pages/Error';
import Home from './pages/Home';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root> ,
    errorElement: <Error></Error>,
    children: [
      {
        path:'/',
        element: <Home></Home>
        
      },
      // {
      //   path:'/',
      //   element:
        
      // },
       
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='max-w-screen-xl mx-auto'>
  <RouterProvider router={router} />
  </div>
  </React.StrictMode>,
)
