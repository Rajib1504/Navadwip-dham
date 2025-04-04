import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import Router from './Router/Router.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
 <RouterProvider router={Router}/>
  </StrictMode>,
)
// Hide the preloader after full window load
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  if (preloader) {
    preloader.style.display = "none";
  }
});
