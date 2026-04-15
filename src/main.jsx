import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { RouterProvider } from 'react-router'
import router from './Routes/Routes'
import FriendsProvider from './contextApi/FriendsProvider'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <FriendsProvider>
      <RouterProvider router={router}>
      </RouterProvider>
      <ToastContainer></ToastContainer>
    </FriendsProvider>

  </StrictMode>,
)
