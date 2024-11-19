import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { RouterProvider } from 'react-router-dom';
import router from './components/routes/router';
import AllContextProvider from './components/context/AllContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AllContextProvider>
      <RouterProvider router={router} />
    </AllContextProvider>
  </StrictMode>,
);
