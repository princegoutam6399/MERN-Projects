import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Doctors from './Pages/Doctors'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Login from './Pages/Login'
import MyProfile from './Pages/MyProfile'
import MyAppointments from './Pages/MyAppointments'
import Appointment from './Pages/Appointment'
import Navbar from './Components/Navbar'


const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/doctors' element={<Doctors />} />
        <Route path='/doctors/:speciality' element={<Doctors />} />
        <Route path='/login' element={<Login />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/appointment' element={<Appointment />} />
      </Routes>
    </>
  )
}

export default App