import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';
import Register from './Pages/Register';
import Login from './Pages/Login';
import AdminHome from './Pages/AdminHome';
import Logout from './Components/Logout';
import Messages from './Pages/Messages';
import ManageProject from './Pages/ManageProject';
import UpdateProject from './Pages/UpdateProject';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/project' element={<Project />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/adminhome' element={<AdminHome />}></Route>
          <Route path='/logout' element={<Logout />}></Route>
          <Route path='/message' element={<Messages/>}></Route>
          <Route path='/manageproject' element={<ManageProject/>}></Route>
          <Route path='/updateproject' element={<UpdateProject/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
