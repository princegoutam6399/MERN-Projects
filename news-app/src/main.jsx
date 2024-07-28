import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Navbar from './Components/Navbar.jsx'
// import Footer from './Components/Footer.jsx'
import NewsBoard from './Components/NewsBoard.jsx'
import Newsitem from './Components/Newsitem.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar/>
    <NewsBoard/>
    <Newsitem/>
    {/* <App /> */}
    {/* <Footer/> */}
  </React.StrictMode>,
)
