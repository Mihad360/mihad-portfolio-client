import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routers/router'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='bg-gray-100 '>
      <div className='max-w-7xl mx-auto'>
        <RouterProvider router={router}></RouterProvider>
      </div>
    </div>
  </React.StrictMode>,
)
