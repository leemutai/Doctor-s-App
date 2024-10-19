<<<<<<< HEAD
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AdminContextProvider from "./context/AdminContext.jsx";
import DoctorContextProvider from "./context/DoctorContext.jsx";
import AppContextProvider from "./context/AppContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AdminContextProvider>
      <DoctorContextProvider>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </DoctorContextProvider>
    </AdminContextProvider>
  </BrowserRouter>
);
=======
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import{ BrowserRouter } from 'react-router-dom'
import AppContextProvider from './context/AppContext.jsx';

createRoot(document.getElementById('root')).render(
  < BrowserRouter>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </BrowserRouter>,
)
>>>>>>> 8e093b1d3d8c1ecceb38b9d9aa15f5cae94958bc
