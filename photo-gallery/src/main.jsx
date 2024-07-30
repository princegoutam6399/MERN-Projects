import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import { RouterProvider } from 'react-router-dom';
import { createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home.jsx'
import About from './Components/About.jsx' 
import Gallery from './Components/Gallery.jsx'
import Services from './Components/Services.jsx'  
import Contact from './Components/Contact.jsx'


const root = ReactDOM.createRoot(document.getElementById('root'));
let allRoute = createBrowserRouter(
  [
   
    {
      path:'/',
      element:<Home/>
    },
    {
      path:'/about',
      element:<About/>
    },
    {
      path:'/gallery',
      element:<Gallery/>
    },
    {
      path:'/services',
      element:<Services/>
    },
    {
      path:'/contact',
      element:<Contact/>
    },
  ]
)


root.render(
  <React.StrictMode>
    <RouterProvider router={allRoute}/>
    <App />
  </React.StrictMode>,
);
